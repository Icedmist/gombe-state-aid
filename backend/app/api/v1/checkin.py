from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.checkin import CheckIn
from app.models.registration import Registration

router = APIRouter(prefix="/checkin", tags=["checkin"])

@router.post("/{registration_id}")
async def check_in(registration_id: str, admin_id: str = "admin", db: AsyncSession = Depends(get_db)):
    reg = (await db.execute(select(Registration).where(Registration.id == registration_id))).scalar_one_or_none()
    if not reg:
        raise HTTPException(404, "Registration not found")
    reg.check_in_status = True
    reg.check_in_time = datetime.now(timezone.utc)
    db.add(CheckIn(registration_id=reg.id, checked_in_by=admin_id))
    await db.commit()
    return {"success": True, "participant": {"id": reg.id, "status": "Checked In"}}
