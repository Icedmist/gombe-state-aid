from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.services.registration_service import registration_stats
from app.services.report_service import summary

router = APIRouter(prefix="/reports", tags=["reports"])

@router.get("/summary")
async def get_summary(db: AsyncSession = Depends(get_db)):
    return await summary(db)

@router.get("/registrations")
async def get_regs(db: AsyncSession = Depends(get_db)):
    return await registration_stats(db)
