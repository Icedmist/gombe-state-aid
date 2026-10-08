"""Local file storage for uploads (S3-compatible swap later)."""
from pathlib import Path
from app.core.config import settings

def save_upload(filename: str, content: bytes) -> str:
    dest = Path(settings.STORAGE_DIR)
    dest.mkdir(parents=True, exist_ok=True)
    path = dest / filename
    path.write_bytes(content)
    return str(path)
