import uuid
from datetime import datetime
from sqlalchemy import DateTime, ForeignKey, String, func
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

class CheckIn(Base):
    __tablename__ = "check_ins"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    registration_id: Mapped[str] = mapped_column(ForeignKey("registrations.id", ondelete="CASCADE"), index=True)
    checked_in_by: Mapped[str | None] = mapped_column(String, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    registration: Mapped["Registration"] = relationship(back_populates="check_ins")
