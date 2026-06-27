# Vibe Coding Workflow

Structured approach to development utilizing AI coding models to write and refactor codebase features.

- **Goal**: Build and iterate features quickly with high quality.
- **When to Use**: Initiating feature work, modifying layout, or adding integrations.
- **Inputs**: User requirements doc or issue ticket.
- **Tools Needed**: AI IDE (Cursor or Antigravity), terminal sandbox.

## Steps

1. **Intake & Scope**:
   - Paste the user requirements into your AI assistant.
   - Run a planning cycle to verify there are no hidden architectural blockers.
2. **Context Selection**:
   - Explicitly index files to be touched (e.g., using `@file` tags).
   - Keep the context window small to avoid model confusion.
3. **Execution & Run**:
   - Instruct the model to write code incrementally.
   - Run local development server to test compile issues.
4. **Clean up**:
   - Run linter/formatters.
   - Review file diffs before making a git commit.

## Quality Checks

- [ ] Does the application compile with zero errors?
- [ ] Are variable naming schemas matching the existing codebase style?
- [ ] Has unnecessary commented code been stripped out?
