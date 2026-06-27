# Superpowers

![Agentic Coding](https://img.shields.io/badge/Agentic%20Coding-3B82F6?style=for-the-badge)
![Skills Framework](https://img.shields.io/badge/Skills%20Framework-8B5CF6?style=for-the-badge)
![TDD](https://img.shields.io/badge/TDD-EF4444?style=for-the-badge)
![Code Review](https://img.shields.io/badge/Code%20Review-10B981?style=for-the-badge)

## What it is

Superpowers is an agentic skills framework and software development methodology for coding agents.

Instead of letting your AI coding agent jump straight into code, Superpowers gives it a structured way to brainstorm, plan, implement, test, review, and finish development branches.

Official repo:
[https://github.com/obra/superpowers](https://github.com/obra/superpowers)

## Why it matters

Most AI coding sessions fail because the agent starts coding too early.

Superpowers helps by adding a stricter development process around the agent. It pushes the agent to clarify the task, create a plan, work in smaller steps, use test-driven development, request code reviews, and verify work before calling it done.

It is useful when you want your coding agent to behave less like a random autocomplete tool and more like a disciplined junior engineer following a clear process.

## Best use cases

### 1. Starting a new feature
Use it when you want the agent to understand the goal first, ask better questions, write a plan, and then implement in smaller tasks.

### 2. Refactoring messy code
Useful when the task has risk and needs a clear plan before touching files.

### 3. Debugging
Useful when you do not want the agent to guess randomly. It encourages a more systematic approach to finding the root cause.

### 4. Test-driven development
Good for projects where you want the agent to write failing tests first, make them pass, then refactor.

### 5. Code review before merge
Useful when you want the agent to check its own work or dispatch a reviewer agent before continuing.

### 6. Longer coding sessions
Helpful when the task is too large for one prompt and needs planning, checkpoints, and verification.

## How it helps in real work

* Reduces random coding
* Forces the agent to clarify the goal before implementation
* Makes large tasks easier to split
* Adds planning before execution
* Encourages TDD
* Adds review checkpoints
* Helps the agent avoid calling unfinished work “done”
* Works well for feature building, refactoring, debugging, and shipping

## Good fit for

* Claude Code users
* Cursor users
* Codex users
* Gemini CLI users
* OpenCode users
* Developers building with AI coding agents
* Indie hackers
* Vibe coders who want more structure
* Teams that want repeatable AI-assisted workflows

## Not a good fit for

* Tiny one-line edits
* People who want the agent to move fast without asking questions
* Projects where you do not want planning, tests, or review steps
* Non-coding workflows

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure Superpowers for my current AI coding setup.

Official repo:
https://github.com/obra/superpowers

Your task:
1. Detect which coding environment or agent I am using.
2. Check the official Superpowers README for the correct installation method.
3. Install Superpowers using the recommended method for this environment.
4. Verify that the installation worked.
5. Explain how I should use it in future coding sessions.
6. Do not make unrelated changes to my project.
7. If installation needs a manual step, stop and tell me exactly what I need to do.

After installation, give me:
- What was installed
- Which command or method was used
- How to trigger or use Superpowers
- How to update it later
- Any limitations I should know
```

## Usage prompt after installation

Use this after Superpowers is installed:

```txt
Use Superpowers for this task.

Before writing code:
1. Understand the goal.
2. Ask only necessary clarifying questions.
3. Create a short design or implementation plan.
4. Break the work into small tasks.
5. Use test-driven development where practical.
6. Review your work before saying it is done.
7. Show me the verification steps.

Task:
[describe your task here]
```

## Example workflow

```txt
I want to add authentication to this app.

Use Superpowers.

Start by understanding the current project structure.
Then propose the simplest implementation plan.
Do not write code until the plan is clear.
Use small commits or clear task checkpoints.
Add tests where practical.
Review the final changes before completion.
```

## Quality checklist

Before marking work complete, the agent should confirm:

* The goal was understood
* The plan was followed
* The code was tested or manually verified
* No unrelated files were changed
* Known risks are documented
* The final answer includes what changed and how to verify it

## Notes

Superpowers can make the agent slower at the start because it adds planning and review steps. That is usually good for complex tasks, but it may feel too heavy for tiny edits.

Use it when correctness, structure, and repeatability matter more than raw speed.

## Links

* GitHub: [https://github.com/obra/superpowers](https://github.com/obra/superpowers)
* Marketplace: [https://github.com/obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace)
