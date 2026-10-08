from pydantic import BaseModel

class SpeakerCreate(BaseModel):
    name: str
    title: str | None = None
    organization: str | None = None
    country: str | None = None
    biography: str | None = None
    photo_url: str | None = None
    category: str | None = None
    social_links: dict | None = None
    published: bool = False
    order: int = 0

class SpeakerOut(SpeakerCreate):
    id: str
    class Config:
        from_attributes = True
