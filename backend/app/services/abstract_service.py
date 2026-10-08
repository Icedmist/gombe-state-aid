from sqlalchemy.ext.asyncio import AsyncSession
from app.models.abstract import Abstract, AbstractReview
from app.schemas.abstract import AbstractCreate, ReviewCreate

async def create_abstract(db: AsyncSession, data: AbstractCreate) -> Abstract:
    obj = Abstract(**data.model_dump())
    db.add(obj)
    await db.commit()
    await db.refresh(obj)
    return obj

async def add_review(db: AsyncSession, abstract_id: str, reviewer_id: str, data: ReviewCreate) -> AbstractReview:
    review = AbstractReview(abstract_id=abstract_id, reviewer_id=reviewer_id, **data.model_dump())
    db.add(review)
    await db.commit()
    await db.refresh(review)
    return review
