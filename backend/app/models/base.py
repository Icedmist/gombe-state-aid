"""Import all models here so Alembic autogenerate sees them."""
from app.core.database import Base  # noqa: F401
from app.models.user import User  # noqa: F401
from app.models.registration import Registration  # noqa: F401
from app.models.abstract import Abstract, AbstractReview  # noqa: F401
from app.models.speaker import Speaker  # noqa: F401
from app.models.session import Session, SessionSpeaker  # noqa: F401
from app.models.partner import Partner  # noqa: F401
from app.models.sponsor import Sponsor  # noqa: F401
from app.models.news import News  # noqa: F401
from app.models.media import Media  # noqa: F401
from app.models.resource import Resource  # noqa: F401
from app.models.checkin import CheckIn  # noqa: F401
from app.models.faq import Faq  # noqa: F401
from app.models.audit_log import AuditLog  # noqa: F401
