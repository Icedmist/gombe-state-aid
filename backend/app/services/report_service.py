from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.abstract import Abstract
from app.models.registration import Registration

async def summary(db: AsyncSession) -> dict:
    regs = (await db.execute(select(func.count(Registration.id)))).scalar() or 0
    abstracts = (await db.execute(select(func.count(Abstract.id)))).scalar() or 0
    return {"registrations": regs, "abstracts": abstracts}
