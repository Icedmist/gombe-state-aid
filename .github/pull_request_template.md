## Linked issue
Closes #<number> <!-- REQUIRED: create the issue first -->

## Branch
`<type>/<issue>-<slug>` e.g. `feat/12-qr-checkin`

## What changed
-

## Verification
- [ ] `docker compose up --build` boots (db healthy, api responds on :8000/health)
- [ ] New/changed backend routes tested (curl or pytest)
- [ ] Migration added if models changed (`alembic revision --autogenerate`)

## Cleanup after merge (maintainer/agent)
- [ ] Squash-merge PR, confirm issue auto-closed
- [ ] Delete remote branch (auto-delete enabled) + local branch (`git branch -d`)
