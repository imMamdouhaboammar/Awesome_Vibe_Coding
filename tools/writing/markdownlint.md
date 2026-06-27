# Markdownlint

![Category](https://img.shields.io/badge/Category-Linter%20%2F%20Formatter-10B981?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-3B82F6?style=for-the-badge)
![Best For](https://img.shields.io/badge/Best%20For-Docs%20Standardization-8B5CF6?style=for-the-badge)

## What it is
Markdownlint is a linting and style verification engine for Markdown files, checking layout structures, header hierarchies, and empty lines.

## Why it matters
Enforces formatting consistency across docs and guides, which ensures readable README pages for developers and clean parsing contexts for AI indexing tools.

## Best use cases
- Standardizing wiki documentation pages.
- Preventing header layout mistakes in documentation-first repositories.
- Pre-commit hooks for documentation checks.

## How it helps
- Resolves spacing mistakes automatically on save.
- Flags broken link anchors and empty headings.
- Keeps markdown files uniform across different contributors.

## Installation prompt
```txt
I want to configure markdownlint for this project.
Please:
1. Generate a standard .markdownlint.json file with rules enabled.
2. Add a vscode configuration block under .vscode/settings.json to format markdown on save.
3. List the rules we are ignoring (e.g. line length limits).
```

## Usage prompt
```txt
Scan all markdown files in my workspace using markdownlint.
Identify errors, suggest formatting improvements, and apply autoconfigure fixes where safe.
```

## Notes
Can be overly strict regarding line breaks or code block separation spacing.

## Links
- Extension: [markdownlint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
