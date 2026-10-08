from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.models.resource import Resource
from app.schemas.partner import ResourceCreate, ResourceOut

router = APIRouter(prefix="/resources", tags=["resources"])

@router.get("", response_model=list[ResourceOut])
async def list_all(db: AsyncSession = Depends(get_db)):
    return (await db.execute(select(Resource).where(Resource.published.is_(True)))).scalars().all()

@router.post("", response_model=ResourceOut, status_code=201)
async def create(data: ResourceCreate, db: AsyncSession = Depends(get_db)):
    obj = Resource(**data.model_dump())
    db.add(obj)
    await db.commit()
    await db.refresh(obj)
    return obj
