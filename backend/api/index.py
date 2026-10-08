"""Vercel Python runtime entrypoint: re-export the FastAPI app.

Services mode builds the `backend` service with root=backend, so this file
is served as the serverless function handling all routed requests.
"""
from app.main import app  # noqa: F401  (Vercel looks for `app` here)
