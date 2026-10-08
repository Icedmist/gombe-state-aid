# Gombe State Aid — TB/HIV Summit Platform

Monorepo for the Gombe State summit site: **Next.js frontend** (Prisma → PostgreSQL)
+ **FastAPI backend** (SQLAlchemy async → PostgreSQL). Single Postgres service in Docker Compose.

## Stack
| Layer | Tech | Notes |
|---|---|---|
| Frontend | Next.js 16, Tailwind, Prisma 5 | `frontend/prisma/schema.prisma` is the data reference (provider `postgresql`) |
| Backend | FastAPI, SQLAlchemy 2 async, Alembic, asyncpg | Mirrors Prisma models; API prefix `/api/v1`, health at `GET /health` |
| DB | Postgres 15 | `user/password/gombe_summit`; host port **5434** → container 5432 |
| Workers | Celery + Redis (optional) | Email/QR background jobs |

## Quickstart
```bash
cp backend/.env.example backend/.env   # adjust secrets
docker compose up --build              # db :5434, api :8000
curl localhost:8000/health             # {"status":"ok","db":"postgresql"}
# API docs: http://localhost:8000/docs

# backend migrations
cd backend
alembic revision --autogenerate -m "describe change"
alembic upgrade head

# frontend
cd frontend && npm install && npx prisma generate && npm run dev
```

## Repo layout
```
backend/            # FastAPI + Postgres (app/{api,core,models,schemas,services,workers}, alembic/)
frontend/           # Next.js + Prisma (schema.prisma mirrors backend models)
docker-compose.yml  # db + api
.github/workflows/contribution.yml  # CI guard for contribution workflow
CONTRIBUTING.md / AGENTS.md          # agent workflow docs
```

## Contribution workflow (mandatory)
> Issue → Branch → PR → Merge → Delete branches → Close issue

1. **Issue first** — no code without a GitHub issue number.
2. **Branch** — `git checkout -b feat/12-short-slug` (`<type>/<issue>-<slug>`).
3. **PR** — body must say `Closes #12`; CI enforces it + branch naming.
4. **Merge + cleanup** — squash-merge with `--delete-branch`, then delete the local branch, verify issue CLOSED.
Full steps + agent prompt: see [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md).

## Backend endpoints (selection)
`POST /api/v1/auth/register|login`, `GET /api/v1/auth/me`, registrations CRUD,
abstracts + reviews, speakers, programme (sessions), partners, sponsors, news,
media, resources, `POST /api/v1/checkin/{id}`, `GET /api/v1/reports/summary`, `GET /api/v1/admin/overview`.
