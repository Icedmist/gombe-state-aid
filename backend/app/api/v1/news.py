from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.news import News
from app.schemas.partner import NewsCreate, NewsOut

router = APIRouter(prefix="/news", tags=["news"])

@router.get("", response_model=list[NewsOut])
async def list_all(db: AsyncSession = Depends(get_db)):
    return (await db.execute(select(News).where(News.published.is_(True)).order_by(News.created_at.desc()))).scalars().all()

@router.get("/{slug}", response_model=NewsOut)
async def get_by_slug(slug: str, db: AsyncSession = Depends(get_db)):
    obj = (await db.execute(select(News).where(News.slug == slug))).scalar_one_or_none()
    if not obj:
        raise HTTPException(404, "Not found")
    return obj

@router.post("", response_model=NewsOut, status_code=201)
async def create(data: NewsCreate, db: AsyncSession = Depends(get_db)):
    obj = News(**data.model_dump())
    db.add(obj)
    await db.commit()
    await db.refresh(obj)
    return obj
