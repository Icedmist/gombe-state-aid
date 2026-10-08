# Contributing (agent + human workflow)

Strict order — no exceptions:

## 1. Open a GitHub issue FIRST
- Bug → use Bug template. Feature → Feature template.
- Every issue gets a number (e.g. `#12`). No code without one.

## 2. Create a branch FROM the issue
```bash
git fetch origin && git checkout master && git pull
git checkout -b feat/12-short-slug   # or fix/12-short-slug, chore/12-..., docs/12-...
```
Format: `<type>/<issue>-<slug>` (`feat|fix|chore|docs|refactor|test`).

## 3. Work + push
```bash
# backend quick check
python -m py_compile backend/app/main.py
docker compose up --build   # db :5434, api :8000/health
git add -A && git commit -m "feat(#12): what changed"
git push -u origin feat/12-short-slug
```

## 4. Open a PR LINKED to the issue
- PR body MUST contain `Closes #12` (CI fails otherwise).
- Keep PRs small, one issue per PR.

## 5. Merge, then cleanup, then close
1. Squash-merge the PR (issue auto-closes via `Closes #n`).
2. Delete the remote branch (repo has auto-delete; or `gh pr merge --delete-branch`).
3. Delete the local branch:
```bash
git checkout master && git pull
git branch -d feat/12-short-slug
git branch -D feat/12-short-slug  # only if -d refuses after merge
git push origin --delete feat/12-short-slug  # if remote still exists
```
4. Verify the issue is CLOSED. If not, comment `Closes #12` + close it manually:
```bash
gh issue close 12 --reason completed
```

## Agent prompt (copy/paste)
> Work issue #N: fetch it (`gh issue view N`), create branch
> `<type>/N-<slug>` from master, implement, push, open PR with
> `Closes #N`, wait for CI, squash-merge with `--delete-branch`,
> run local/remote branch cleanup above, verify `gh issue view N`
> shows CLOSED. Never commit directly to master.
