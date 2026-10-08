"""Registration business logic."""
from sqlalchemy import func, select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.registration import Registration
from app.schemas.registration import RegistrationCreate

async def create_registration(db: AsyncSession, data: RegistrationCreate) -> Registration:
    reg = Registration(**data.model_dump())
    db.add(reg)
    try:
        await db.commit()
    except IntegrityError as e:
        await db.rollback()
        raise ValueError("Email already registered") from e
    await db.refresh(reg)
    return reg

async def registration_stats(db: AsyncSession) -> dict:
    total = (await db.execute(select(func.count(Registration.id)))).scalar() or 0
    checked = (await db.execute(select(func.count(Registration.id)).where(Registration.check_in_status.is_(True)))).scalar() or 0
    return {"total": total, "checked_in": checked}
