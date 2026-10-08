from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.core.dependencies import require_roles
from app.models.faq import Faq
from app.models.news import News

router = APIRouter(prefix="/admin", tags=["admin"],
                   dependencies=[Depends(require_roles("SUPER_ADMIN", "EVENT_ADMIN"))])

@router.get("/overview")
async def overview(db: AsyncSession = Depends(get_db)):
    news_count = len((await db.execute(select(News))).scalars().all())
    faq_count = len((await db.execute(select(Faq))).scalars().all())
    return {"news": news_count, "faqs": faq_count}
