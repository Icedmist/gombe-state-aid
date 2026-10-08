from datetime import datetime
from pydantic import BaseModel, EmailStr

class RegistrationCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: str
    organization: str | None = None
    job_title: str | None = None
    state: str | None = None
    lga: str | None = None
    organization_type: str | None = None
    participant_category: str | None = None
    areas_of_interest: list[str] = []
    accessibility_reqs: str | None = None
    dietary_reqs: str | None = None
    consent: bool = False
    newsletter_opt_in: bool = False

class RegistrationUpdate(BaseModel):
    status: str | None = None
    check_in_status: bool | None = None

class RegistrationOut(RegistrationCreate):
    id: str
    status: str
    check_in_status: bool
    check_in_time: datetime | None = None
    created_at: datetime
    class Config:
        from_attributes = True
