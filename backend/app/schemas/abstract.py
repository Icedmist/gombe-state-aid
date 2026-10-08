from datetime import datetime
from pydantic import BaseModel, EmailStr

class AbstractCreate(BaseModel):
    title: str
    author_name: str
    co_authors: str | None = None
    organization: str
    email: EmailStr
    phone: str | None = None
    presentation_type: str | None = None
    theme_id: str | None = None
    text: str
    keywords: str | None = None
    file_url: str | None = None
    declaration: bool = False

class AbstractUpdate(BaseModel):
    status: str | None = None

class AbstractOut(AbstractCreate):
    id: str
    status: str
    created_at: datetime
    class Config:
        from_attributes = True

class ReviewCreate(BaseModel):
    score: int | None = None
    notes: str | None = None
    recommendation: str | None = None
