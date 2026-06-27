# AI Coding Cheat Sheet

Quick reminders for maximizing throughput inside AI-powered IDEs (e.g., Cursor, Antigravity).

---

## Workspace Context Keys

| Key | Scope | Best Use Case |
|---|---|---|
| `@workspace` | Repository-wide indexing | Answering general design or cross-module questions |
| `@file` | Selected file reference | Modifying or writing a specific component |
| `@folder` | Selected directory | Researching/refactoring a whole module |
| `@web` | Real-time web queries | Searching latest documentation or API releases |

---

## Context Window Optimization

- **Trim context frequently**: Clear chat history or close tabs to prevent context pollution.
- **Reference specific lines**: Use range selection (e.g., lines 10-30) rather than passing long files.
- **Pin design files**: Keep a `PRODUCT.md` or `DESIGN.md` referenced in multi-file generations.
