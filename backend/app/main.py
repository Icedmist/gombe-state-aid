"""FastAPI entrypoint - PostgreSQL backed."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.admin import router as admin_router
from app.api.v1.abstracts import router as abstracts_router
from app.api.v1.auth import router as auth_router
from app.api.v1.checkin import router as checkin_router
from app.api.v1.media import router as media_router
from app.api.v1.news import router as news_router
from app.api.v1.partners import router as partners_router
from app.api.v1.programme import router as programme_router
from app.api.v1.registrations import router as registrations_router
from app.api.v1.reports import router as reports_router
from app.api.v1.resources import router as resources_router
from app.api.v1.speakers import router as speakers_router
from app.api.v1.sponsors import router as sponsors_router
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME, version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health():
    return {"status": "ok", "db": "postgresql"}

for r in (auth_router, registrations_router, abstracts_router, speakers_router,
          programme_router, partners_router, sponsors_router, news_router,
          media_router, resources_router, checkin_router, reports_router, admin_router):
    app.include_router(r, prefix=settings.API_V1_PREFIX)
