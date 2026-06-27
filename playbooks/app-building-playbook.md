# App Building Playbook

A structured playbook for building full-stack web applications using AI coding tools.

---

## 1. Specification (Spec-Driven Development)

Never start coding without a spec. Create a `PRODUCT.md` and `DESIGN.md` in your project root detailing:
- Core user stories.
- Page routing structures.
- Data structures and schemas.
- Color palettes and theme tokens.

---

## 2. Setting the Foundation

- Initialize standard projects (e.g. Next.js, Vite) using non-interactive scripts.
- Immediately define CSS variables in the entry stylesheet (`index.css` or `globals.css`).
- Build reusable UI blocks (layout wrapper, cards, tables, headers).

---

## 3. Incremental Execution

- Delegate task execution file-by-file.
- Write unit tests alongside logic.
- Commit clean state transitions.

---

## 4. Verification Gate

- Run browser automation testing or dev server checking.
- Ensure all pages are responsive and have active accessibility elements (semantic HTML, tap target scales).
