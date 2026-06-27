# Debugging Cheat Sheet

Quick commands and checks for diagnosing build, test, and runtime failures.

---

## Log Analysis Prompts

When pasting exceptions to the model, prefix with:

```markdown
Analyze this traceback.
Identify:
1. The immediate failure point (line & file).
2. The root cause (missing import, nil pointer, type mismatch).
3. The simplest fix that restores execution.
```

---

## Quick Terminal Commands

```bash
# Node: Run linter
npm run lint

# Python: Run specific test file
pytest tests/test_api.py -v

# Docker: View live logs
docker logs -f container_name
```
