import uuid
from datetime import datetime
from sqlalchemy import Boolean, DateTime, ForeignKey, String, Text, UniqueConstraint, func
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

class Session(Base):
    __tablename__ = "sessions"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    title: Mapped[str] = mapped_column(String)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    start_time: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    end_time: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    room: Mapped[str | None] = mapped_column(String, nullable=True)
    session_type: Mapped[str | None] = mapped_column(String, nullable=True)
    track: Mapped[str | None] = mapped_column(String, nullable=True)
    moderator: Mapped[str | None] = mapped_column(String, nullable=True)
    published: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    speakers: Mapped[list["SessionSpeaker"]] = relationship(back_populates="session", cascade="all, delete-orphan")

class SessionSpeaker(Base):
    __tablename__ = "session_speakers"
    __table_args__ = (UniqueConstraint("session_id", "speaker_id"),)
    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    session_id: Mapped[str] = mapped_column(ForeignKey("sessions.id", ondelete="CASCADE"))
    speaker_id: Mapped[str] = mapped_column(ForeignKey("speakers.id", ondelete="CASCADE"))
    session: Mapped["Session"] = relationship(back_populates="speakers")
    speaker: Mapped["Speaker"] = relationship(back_populates="sessions")
