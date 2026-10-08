"""Generate QR codes for registration check-in."""
import io
import qrcode

def make_checkin_qr(registration_id: str) -> bytes:
    img = qrcode.make(f"gombe-checkin:{registration_id}")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue()
