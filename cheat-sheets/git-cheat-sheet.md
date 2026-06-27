# Git Cheat Sheet

Commands for managing workflow branches and maintaining clean history when vibe coding.

---

## Clean Feature Branch Pipeline

```bash
# 1. Update primary branch
git checkout main && git pull origin main

# 2. Spin off a clean branch
git checkout -b feature/awesome-new-layout

# 3. Work and commit incrementally
git add .
git commit -m "feat: design bento grid layout"

# 4. Sync upstream changes (before merging)
git fetch origin
git rebase origin/main
```

---

## Squashing Commits

For keeping history readable prior to opening a PR:

```bash
# Squash the last 3 commits into one
git rebase -i HEAD~3
# Replace 'pick' with 'squash' (or 's') on the second and third commits.
```
