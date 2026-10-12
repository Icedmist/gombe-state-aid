import uuid
from datetime import datetime
from sqlalchemy import DateTime, Integer, String, func
from sqlalchemy.dialects.postgresql import ARRAY, JSONB
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base

class SentEmail(Base):
    __tablename__ = "sent_emails"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    subject: Mapped[str] = mapped_column(String)
    from_name: Mapped[str] = mapped_column("fromName", String, default="Gombe Summit")
    from_local: Mapped[str] = mapped_column("fromLocal", String, default="updates")
    audience: Mapped[str] = mapped_column(String, default="custom")
    recipient_count: Mapped[int] = mapped_column("recipientCount", Integer, default=0)
    recipients: Mapped[list[str]] = mapped_column(ARRAY(String), default=list)
    attachments: Mapped[dict | list | None] = mapped_column(JSONB, nullable=True)
    sent_at: Mapped[datetime] = mapped_column("sentAt", DateTime(timezone=True), server_default=func.now())
