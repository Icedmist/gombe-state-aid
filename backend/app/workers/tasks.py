"""Celery tasks (email, reports). Broker = Redis."""
from celery import Celery
from app.core.config import settings

celery = Celery("workers", broker=settings.REDIS_URL)

@celery.task
def send_confirmation_email(email: str, name: str) -> str:
    return f"queued confirmation to {email} for {name}"
