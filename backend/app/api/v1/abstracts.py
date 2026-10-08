from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.abstract import Abstract
from app.models.user import User
from app.schemas.abstract import AbstractCreate, AbstractOut, AbstractUpdate, ReviewCreate
from app.services.abstract_service import add_review, create_abstract

router = APIRouter(prefix="/abstracts", tags=["abstracts"])

@router.post("", response_model=AbstractOut, status_code=201)
async def create(data: AbstractCreate, db: AsyncSession = Depends(get_db)):
    return await create_abstract(db, data)

@router.get("", response_model=list[AbstractOut])
async def list_all(db: AsyncSession = Depends(get_db)):
    return (await db.execute(select(Abstract).order_by(Abstract.created_at.desc()))).scalars().all()

@router.patch("/{abstract_id}", response_model=AbstractOut)
async def update_status(abstract_id: str, data: AbstractUpdate, db: AsyncSession = Depends(get_db)):
    obj = (await db.execute(select(Abstract).where(Abstract.id == abstract_id))).scalar_one_or_none()
    if not obj:
        raise HTTPException(404, "Not found")
    for k, v in data.model_dump(exclude_unset=True).items():
        setattr(obj, k, v)
    await db.commit()
    await db.refresh(obj)
    return obj

@router.post("/{abstract_id}/reviews", status_code=201)
async def review(abstract_id: str, data: ReviewCreate, user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    return await add_review(db, abstract_id, user.id, data)
