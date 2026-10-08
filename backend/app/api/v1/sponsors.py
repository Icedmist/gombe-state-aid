from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.sponsor import Sponsor
from app.schemas.partner import SponsorCreate, SponsorOut

router = APIRouter(prefix="/sponsors", tags=["sponsors"])

@router.get("", response_model=list[SponsorOut])
async def list_all(db: AsyncSession = Depends(get_db)):
    return (await db.execute(select(Sponsor).where(Sponsor.published.is_(True)).order_by(Sponsor.order))).scalars().all()

@router.post("", response_model=SponsorOut, status_code=201)
async def create(data: SponsorCreate, db: AsyncSession = Depends(get_db)):
    obj = Sponsor(**data.model_dump())
    db.add(obj)
    await db.commit()
    await db.refresh(obj)
    return obj
