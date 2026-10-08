from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.speaker import Speaker
from app.schemas.speaker import SpeakerCreate, SpeakerOut

router = APIRouter(prefix="/speakers", tags=["speakers"])

@router.get("", response_model=list[SpeakerOut])
async def list_all(published_only: bool = True, db: AsyncSession = Depends(get_db)):
    q = select(Speaker).order_by(Speaker.order)
    if published_only:
        q = q.where(Speaker.published.is_(True))
    return (await db.execute(q)).scalars().all()

@router.post("", response_model=SpeakerOut, status_code=201)
async def create(data: SpeakerCreate, db: AsyncSession = Depends(get_db)):
    obj = Speaker(**data.model_dump())
    db.add(obj)
    await db.commit()
    await db.refresh(obj)
    return obj

@router.delete("/{speaker_id}", status_code=204)
async def delete(speaker_id: str, db: AsyncSession = Depends(get_db)):
    obj = (await db.execute(select(Speaker).where(Speaker.id == speaker_id))).scalar_one_or_none()
    if not obj:
        raise HTTPException(404, "Not found")
    await db.delete(obj)
    await db.commit()
