# Cursor

![Category](https://img.shields.io/badge/Category-IDE%20%2F%20Editor-10B981?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-3B82F6?style=for-the-badge)
![Best For](https://img.shields.io/badge/Best%20For-Codebase%20Context-8B5CF6?style=for-the-badge)

## What it is
Cursor is an AI-first code editor branched from VS Code, designed to integrate large language models directly into the software development workflow.

## Why it matters
By embedding models into the IDE, developers can chat with their codebases, run edits using inline prompts, and reference local files, folders, or web documentation without leaving the window.

## Best use cases
- Codebase-wide refactoring or architectural modifications.
- Inline prompt edits on specific code blocks.
- Real-time indexing of local symbols and workspaces.

## How it helps
- Indexes the workspace to allow context-aware code generation.
- Reduces context-switching between IDE and browser-based AI chats.
- Generates high-quality edits directly inside the file editor.

## Installation prompt
```txt
I want you to configure my project workspace so it is fully indexed and ready for Cursor.
Identify:
1. Standard configuration files that Cursor reads (e.g. .cursorrules).
2. Create a clean .cursorrules file in the root directory that enforces my project rules.
3. List the recommended VS Code extensions that improve Cursor operations.
```

## Usage prompt
```txt
Use Cursor's @workspace context to search the current project.
Find where [component/function/class] is defined, explain how it is used, and generate a new module implementing [new feature description] matching the design patterns you discovered.
```

## Notes
Cursor uses high token limits during workspace-wide searches; keep context small to manage billing budgets.

## Links
- Website: [https://cursor.sh](https://cursor.sh)
- Documentation: [https://docs.cursor.com](https://docs.cursor.com)
