from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.registration import Registration
from app.schemas.registration import RegistrationCreate, RegistrationOut, RegistrationUpdate
from app.services.registration_service import create_registration

router = APIRouter(prefix="/registrations", tags=["registrations"])

@router.post("", response_model=RegistrationOut, status_code=201)
async def create(data: RegistrationCreate, db: AsyncSession = Depends(get_db)):
    try:
        return await create_registration(db, data)
    except ValueError as e:
        raise HTTPException(400, str(e)) from e

@router.get("", response_model=list[RegistrationOut])
async def list_all(db: AsyncSession = Depends(get_db)):
    return (await db.execute(select(Registration).order_by(Registration.created_at.desc()))).scalars().all()

@router.get("/{reg_id}", response_model=RegistrationOut)
async def get_one(reg_id: str, db: AsyncSession = Depends(get_db)):
    obj = (await db.execute(select(Registration).where(Registration.id == reg_id))).scalar_one_or_none()
    if not obj:
        raise HTTPException(404, "Not found")
    return obj

@router.patch("/{reg_id}", response_model=RegistrationOut)
async def update(reg_id: str, data: RegistrationUpdate, db: AsyncSession = Depends(get_db)):
    obj = (await db.execute(select(Registration).where(Registration.id == reg_id))).scalar_one_or_none()
    if not obj:
        raise HTTPException(404, "Not found")
    for k, v in data.model_dump(exclude_unset=True).items():
        setattr(obj, k, v)
    await db.commit()
    await db.refresh(obj)
    return obj
