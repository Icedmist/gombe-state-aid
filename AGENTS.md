# Agent Instructions

## Mandatory contribution loop
1. **Issue first**: `gh issue view <N>` — if no issue exists, create one (`gh issue create`) and STOP until it has a number.
2. **Branch**: `git checkout master && git pull && git checkout -b <type>/<N>-<slug>`.
3. **Implement**: backend lives in `backend/` (FastAPI + PostgreSQL via SQLAlchemy async + Alembic). Mirror `frontend/prisma/schema.prisma` models. Run `python -m py_compile backend/app/main.py` and `docker compose config`.
4. **PR**: `gh pr create --title "<type>(#N): ..." --body "Closes #N ..."`. CI (`contribution-guard`) requires `Closes #N` in body and `<type>/<N>-<slug>` branch name.
5. **Merge + cleanup**: `gh pr merge --squash --delete-branch`, then:
   `git checkout master && git pull && git branch -d <branch> && git push origin --delete <branch>` (if needed) and confirm `gh issue view N` is CLOSED (`gh issue close N` if not).

## Backend rules (PostgreSQL)
- Async SQLAlchemy (`app/core/database.py`), sync URL only for Alembic (`SYNC_DATABASE_URL`).
- New model → import in `app/models/base.py` + `alembic revision --autogenerate -m "..."`.
- Never hardcode credentials; use `app/core/config.py` / env. Match `docker-compose.yml` (`user/password/gombe_summit`, host port 5434).
- Health: `GET /health`. API prefix: `/api/v1`.

## Never
- Commit/push directly to `master`/`main`.
- Open a PR without `Closes #N`.
- Leave local or remote branches behind after merge.
