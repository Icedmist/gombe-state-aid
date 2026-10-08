import uuid
from datetime import datetime
from sqlalchemy import Boolean, DateTime, String, Text, func
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

class Registration(Base):
    __tablename__ = "registrations"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    first_name: Mapped[str] = mapped_column(String)
    last_name: Mapped[str] = mapped_column(String)
    email: Mapped[str] = mapped_column(String, unique=True, index=True)
    phone_number: Mapped[str] = mapped_column(String)
    organization: Mapped[str | None] = mapped_column(String, nullable=True)
    job_title: Mapped[str | None] = mapped_column(String, nullable=True)
    state: Mapped[str | None] = mapped_column(String, nullable=True)
    lga: Mapped[str | None] = mapped_column(String, nullable=True)
    organization_type: Mapped[str | None] = mapped_column(String, nullable=True)
    participant_category: Mapped[str | None] = mapped_column(String, nullable=True)
    areas_of_interest: Mapped[list[str]] = mapped_column(ARRAY(String), default=list)
    accessibility_reqs: Mapped[str | None] = mapped_column(Text, nullable=True)
    dietary_reqs: Mapped[str | None] = mapped_column(Text, nullable=True)
    consent: Mapped[bool] = mapped_column(Boolean, default=False)
    newsletter_opt_in: Mapped[bool] = mapped_column(Boolean, default=False)
    status: Mapped[str] = mapped_column(String, default="CONFIRMED", index=True)
    check_in_status: Mapped[bool] = mapped_column(Boolean, default=False)
    check_in_time: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    check_ins: Mapped[list["CheckIn"]] = relationship(back_populates="registration", cascade="all, delete-orphan")
