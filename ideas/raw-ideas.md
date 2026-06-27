# Raw Ideas

Fleeting design, application, and automation concepts.

---

## 1. Local Database Schema Viewer MCP Server
- **Problem**: LLMs struggle to visualize complex database relations unless schemas are manually copied and pasted.
- **Concept**: A simple MCP server that runs locally, queries Postgres/SQLite schemas, and serves a visual relation map or formatted text schema directly to the model context.
- **Status**: Backlog

---

## 2. Interactive Readme Updater
- **Problem**: Documentation drifts as soon as code refactoring occurs.
- **Concept**: A git pre-commit hook that uses local LLMs to parse diffs and propose modifications to the README.
- **Status**: Researching
