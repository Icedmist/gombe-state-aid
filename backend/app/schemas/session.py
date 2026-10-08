from datetime import datetime
from pydantic import BaseModel

class SessionCreate(BaseModel):
    title: str
    description: str | None = None
    start_time: datetime | None = None
    end_time: datetime | None = None
    room: str | None = None
    session_type: str | None = None
    track: str | None = None
    moderator: str | None = None
    published: bool = False
    speaker_ids: list[str] = []

class SessionOut(SessionCreate):
    id: str
    class Config:
        from_attributes = True
