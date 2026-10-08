from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.partner import Partner
from app.schemas.partner import PartnerCreate, PartnerOut

router = APIRouter(prefix="/partners", tags=["partners"])

@router.get("", response_model=list[PartnerOut])
async def list_all(db: AsyncSession = Depends(get_db)):
    return (await db.execute(select(Partner).where(Partner.published.is_(True)).order_by(Partner.order))).scalars().all()

@router.post("", response_model=PartnerOut, status_code=201)
async def create(data: PartnerCreate, db: AsyncSession = Depends(get_db)):
    obj = Partner(**data.model_dump())
    db.add(obj)
    await db.commit()
    await db.refresh(obj)
    return obj
