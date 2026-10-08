from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.session import Session, SessionSpeaker
from app.schemas.session import SessionCreate, SessionOut

router = APIRouter(prefix="/programme", tags=["programme"])

@router.get("", response_model=list[SessionOut])
async def list_all(published_only: bool = True, db: AsyncSession = Depends(get_db)):
    q = select(Session).order_by(Session.start_time)
    if published_only:
        q = q.where(Session.published.is_(True))
    rows = (await db.execute(q)).scalars().all()
    out = []
    for s in rows:
        links = (await db.execute(select(SessionSpeaker).where(SessionSpeaker.session_id == s.id))).scalars().all()
        out.append(SessionOut(id=s.id, title=s.title, description=s.description, start_time=s.start_time,
                              end_time=s.end_time, room=s.room, session_type=s.session_type, track=s.track,
                              moderator=s.moderator, published=s.published, speaker_ids=[l.speaker_id for l in links]))
    return out

@router.post("", status_code=201)
async def create(data: SessionCreate, db: AsyncSession = Depends(get_db)):
    s = Session(**{k: v for k, v in data.model_dump().items() if k != "speaker_ids"})
    db.add(s)
    await db.flush()
    for sid in data.speaker_ids:
        db.add(SessionSpeaker(session_id=s.id, speaker_id=sid))
    await db.commit()
    await db.refresh(s)
    return {"id": s.id}

@router.delete("/{session_id}", status_code=204)
async def delete(session_id: str, db: AsyncSession = Depends(get_db)):
    obj = (await db.execute(select(Session).where(Session.id == session_id))).scalar_one_or_none()
    if not obj:
        raise HTTPException(404, "Not found")
    await db.delete(obj)
    await db.commit()
