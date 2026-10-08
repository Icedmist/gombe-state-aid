from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.media import Media
from app.schemas.partner import MediaCreate, MediaOut

router = APIRouter(prefix="/media", tags=["media"])

@router.get("", response_model=list[MediaOut])
async def list_all(db: AsyncSession = Depends(get_db)):
    return (await db.execute(select(Media).where(Media.published.is_(True)))).scalars().all()

@router.post("", response_model=MediaOut, status_code=201)
async def create(data: MediaCreate, db: AsyncSession = Depends(get_db)):
    obj = Media(**data.model_dump())
    db.add(obj)
    await db.commit()
    await db.refresh(obj)
    return obj
