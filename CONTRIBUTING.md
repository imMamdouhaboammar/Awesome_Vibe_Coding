# Contributing to Riftbook

Thank you for contributing! Riftbook is a curated, workflow-first field guide for AI-assisted builders. To maintain a high signal-to-noise ratio and ensure all resources are highly practical, we enforce strict formatting and quality standards.

> [!IMPORTANT]
> Riftbook is not a generic awesome-list clone. We do not accept plain links. Every resource, tool, or skill must contain detailed workflow context explaining exactly when, how, and why to use it.

---

## Contribution Rules

1. **No Plain Links**: Do not submit plain links without workflow context. Every entry must detail how the resource fits into a developer's workflow.
2. **No Promotional Fluff**: Avoid marketing jargon, hype words (e.g., "revolutionary", "game-changing"), or affiliate links. Focus purely on technical capability and practicality.
3. **Tested Resources Only**: Do not submit prompts you haven't run, tools you haven't used, or workflows you haven't executed yourself.
4. **Use the Templates**: Every new entry must strictly follow its corresponding template under the [`/templates`](./templates/) directory.
5. **Link Integrity**: Ensure all URLs are active, direct, and free of redirects or tracking parameters.
6. **No Placeholders**: Avoid writing "TBD" or "TODO". Every section in a template must be filled with real content.

---

## Required Card Schema

Every new tool, skill, or resource entry submitted must include:

*   **Name**: Clear and descriptive name of the resource.
*   **Category**: Exact folder/file classification.
*   **What it is**: A concise description of the resource.
*   **Why it matters**: The value it brings to the developer.
*   **When to use it**: The exact scenario or problem this solves.
*   **How to use it**: Practical step-by-step instructions.
*   **Commands**: CLI commands to run if applicable.
*   **Agent Prompts**: Practical prompts to give the agent if useful.
*   **Good fit for**: Scenarios where this tool/resource shines.
*   **Not a good fit for**: Scenarios where this should be avoided.
*   **Notes and limitations**: Edge cases, token usage, constraints, or known issues.
*   **Official links**: Verified destination URLs.

---

## How to Add Resources

### 1. How to Add a Prompt
1. Choose the appropriate subfolder in [`/prompts`](./prompts/) (e.g., `coding/`, `design/`, `writing/`).
2. Create a markdown file named after your prompt (e.g., `refactor-complexity.md`).
3. Apply the format from [`templates/prompt-template.md`](./templates/prompt-template.md).
4. Update the section README to link to your new file with a short description.

### 2. How to Add a Tool
1. Identify the target file in [`/tools`](./tools/) (e.g., `coding-tools.md`, `design-tools.md`).
2. Append your tool to the bottom of the list using the layout specified in [`templates/tool-template.md`](./templates/tool-template.md).
3. If it's a new category, add a heading section first.

### 3. How to Add a Workflow
1. Create a markdown file in [`/workflows`](./workflows/) describing the sequence (e.g., `test-driven-development-workflow.md`).
2. Apply the layout from [`templates/workflow-template.md`](./templates/workflow-template.md).
3. Add a link to your file in [`workflows/README.md`](./workflows/README.md).

### 4. How to Add a Skill
1. Select the relevant folder under [`/skills`](./skills/) (e.g., `coding/`, `ai-agents/`).
2. Create a folder and a `SKILL.md` (or add to existing markdown files if it fits).
3. Apply the layout from [`templates/skill-template.md`](./templates/skill-template.md).
4. Add a link to it in [`skills/README.md`](./skills/README.md).

---

## Writing Guidelines

*   **Keep it Concise**: Use bullet points and lists. Minimize long-form paragraphs.
*   **Provide Expected Outputs**: When adding prompts, always include a sample output or a link to a working example.
*   **Document Constraints**: Explicitly state limitations (e.g., "Only works with Claude 3.5 Sonnet", "High token usage").
*   **No Duplication**: Search the repo first to make sure the resource or prompt isn't already covered.

