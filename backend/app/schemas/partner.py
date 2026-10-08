from pydantic import BaseModel

class PartnerCreate(BaseModel):
    name: str
    description: str | None = None
    category: str | None = None
    logo_url: str | None = None
    website_url: str | None = None
    order: int = 0
    published: bool = False

class PartnerOut(PartnerCreate):
    id: str
    class Config:
        from_attributes = True

class SponsorOut(PartnerOut):
    pass

class SponsorCreate(PartnerCreate):
    pass

class NewsCreate(BaseModel):
    title: str
    slug: str
    summary: str | None = None
    content: str
    featured_image: str | None = None
    author: str | None = None
    category: str | None = None
    tags: list[str] = []
    featured: bool = False
    published: bool = False

class NewsOut(NewsCreate):
    id: str
    class Config:
        from_attributes = True

class MediaCreate(BaseModel):
    title: str
    url: str
    type: str
    category: str | None = None
    published: bool = False

class MediaOut(MediaCreate):
    id: str
    class Config:
        from_attributes = True

class ResourceCreate(BaseModel):
    title: str
    description: str | None = None
    url: str
    category: str | None = None
    published: bool = False

class ResourceOut(ResourceCreate):
    id: str
    class Config:
        from_attributes = True
