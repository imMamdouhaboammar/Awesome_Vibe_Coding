<!--
  SUPERHERO PROMPT — Reusable Template
  Source of truth: playbook/templates/superhero-prompt.md
  Referenced in: playbook/getting-started/03-build-your-default-stack.md
  Visual asset: playbook/assets/callouts/superhero-prompt.svg

  PURPOSE:
  This is a copy-ready prompt to paste into your coding agent before implementation.
  It is not a motivational prompt. It is a practical setup prompt.
  It tells the agent to prepare skills, tools, hooks, checks, runtime safety, and
  approval gates before writing production code.

  RULES FOR THIS FILE:
  - Do not install anything from this file
  - This is documentation only
  - Do not claim the install command is guaranteed until verified in the local environment
  - Add approval gates before all global installs, setup commands, and linking commands
  - Keep all links relative
  - Do not break existing README links
-->

<p align="center">
  <img src="../assets/callouts/superhero-prompt.svg" alt="Superhero Prompt" width="100%" />
</p>

# Superhero Prompt

![COPY THIS](../assets/badges/copy-this.svg) ![AGENT MOVE](../assets/badges/agent-move.svg) ![DON'T BREAK](../assets/badges/dont-break.svg) ![DEFAULT STACK](../assets/badges/default-stack.svg) ![SHIP CHECK](../assets/badges/ship-check.svg)

> **Arm your coding agent before you ask it to build.**
>
> A vibe coder should not ask the agent to write production code before the agent has the right skills, rules, checks, hooks, and runtime safety. This prompt prepares the agent — it does not start the build.

---

## How to Use This Prompt

1. Copy the full prompt below
2. Paste it into your coding agent at the start of a new project or feature session
3. Wait for the agent's Approval Report before asking it to write any production code
4. Review and approve each step before the agent proceeds

The agent must stop and ask for your approval before:

- Running any install command
- Running any setup or linking command
- Running any global configuration command

---

## The Full Prompt

Copy everything from the code block below and paste it into your coding agent.

![COPY THIS](../assets/badges/copy-this.svg)

````
# Superhero Prompt

Install, use, clone, or update these tools to equip yourself as an elite coding agent
before implementation.

Your job is not to start coding immediately.

Your job is to prepare your working environment, skills, rules, hooks, quality checks,
and safety layer first — then ask for approval before writing production code.

---

## Context

We are working inside this repository:

[PASTE REPO CONTEXT OR PROJECT NAME HERE]

The approved project truth files are:

- PRODUCT.md
- DESIGN.md
- AGENT.md
- STACK_DECISION.md
- IMPLEMENTATION_PLAN.md
- OPEN_QUESTIONS.md
- RULES.md
- TASKS.md

If any of these files are missing, report that first and suggest the minimum setup needed.

---

## Step 1: Inspect Before Installing

Before installing or cloning anything, inspect the repo and tell me:

1. What stack is this project using?
2. Is this a new project or an existing codebase?
3. Which package manager is already used?
4. Which agent config files already exist?
5. Which tools or skills are already installed?
6. Which safety checks are missing?
7. Which setup steps require my approval?

Do not run install commands yet.

---

## Step 2: Clean Code Skill

I want you to use a Clean Code skill to reduce spaghetti code from the beginning.

Preferred skill:

```bash
npx skills add https://github.com/sickn33/antigravity-awesome-skills --skill clean-code
```

Before running this command:

1. Check whether the `skills` CLI exists in this environment
2. Run the relevant help command if available (e.g., `skills --help` or `npx skills --help`)
3. Verify the correct install syntax for this environment
4. Explain where the skill will be installed and what it changes
5. Report if this command is not valid in the local environment
6. Propose the correct alternative if the command is not valid
7. Ask for my approval before executing anything

Do not run this command until I approve it.

After the skill is available, use it as a coding rule for:

- New code
- Refactoring existing code
- Self-review before submitting changes
- Naming (variables, functions, files)
- Function design (single responsibility)
- Error handling
- Test discipline
- Identifying and removing code smells

---

## Step 3: Anti-Spaghetti Rules

Before writing production code, create or update a short section in AGENT.md or RULES.md called:

`Anti-Spaghetti Code Rules`

It must include:

- Functions should do one thing
- Names should explain intent
- Avoid hidden side effects
- Keep files focused
- Prefer small modules over giant files
- Do not mix UI, data access, business logic, and side effects in one place
- Do not add abstractions before they are needed
- Do not duplicate logic silently
- Add tests for core logic where possible
- Refactor before adding more code if the file starts getting messy

---

## Step 4: Runtime Safety

If this is a React, Next.js, or any other frontend app, add the runtime safety layer
before building major UI flows.

For React:

- Add an Error Boundary or a trusted equivalent
- Add a fallback UI
- Add a reset or retry action where possible
- Log errors in development
- Add a small test component or route that intentionally throws to verify the boundary

For Next.js App Router:

- Use `error.tsx` for important route segments
- Use `global-error.tsx` only when root-level handling is needed
- Do not assume event-handler or async errors are caught automatically

For other stacks:

- Identify the framework equivalent and explain it before implementation

Do not add a monitoring vendor unless I approve it.

---

## Step 5: Spec Discipline

If a spec-driven workflow is suitable for this project:

1. Check whether spec files already exist (PRODUCT.md, DESIGN.md, IMPLEMENTATION_PLAN.md)
2. Propose the exact setup needed if they are missing
3. Wait for approval
4. Use this sequence for implementation:
   - Read the constitution / project truth files
   - Specify and clarify before planning
   - Plan before implementation
   - Break into tasks before writing code
   - Implement in the smallest safe slices

Do not skip clarification before planning.

---

## Step 6: Delegation Runtime

If agent delegation is useful for this project:

1. Check whether the delegation tool (e.g., `dt`) is available
2. Check backend readiness
3. Propose setup steps if missing
4. Wait for approval before running any setup
5. Use delegation only for focused, bounded tasks
6. Review every delegated result before applying it

Do not run global setup or linking commands without approval.

---

## Step 7: TDD / Test Discipline

If the feature includes core logic, data transformation, API behavior, or complex state:

- Write or propose failing tests first
- Implement only the smallest code needed to pass
- Do not fake green tests
- Do not skip tests because the UI "looks right"

If the work is visual exploration only, explain what can be manually verified instead.

---

## Step 8: Hooks and Quality Gates

Inspect the repo and recommend only the hooks and checks that fit the project.

Possible checks:

- lint
- typecheck
- test
- format
- build
- accessibility check (if UI-heavy)
- React quality audit (if React-heavy)
- dependency or security check (if relevant)

Do not install all tools by default.
Recommend the smallest useful quality gate set.
Wait for approval before installing any gate.

---

## Step 9: Logo and Icon Rule

If provider logos, AI client logos, or tool logos are needed:

- Read https://lobehub.com/icons/skill.md
- Use @lobehub/icons when available
- Prefer SVG
- Do not invent unofficial logos
- If the logo does not exist, use a text label or a neutral icon

---

## Step 10: Approval Report

Before writing production code, give me this report:

1. Current stack
2. Missing project truth files
3. Recommended skills (with install commands listed but NOT executed)
4. Recommended tools
5. Recommended hooks and checks
6. Runtime safety status
7. Clean code status
8. Testing strategy
9. Commands you want to run (list them — do not run yet)
10. Risks before implementation
11. First implementation slice proposal

Wait for my explicit approval before writing production code.
````

---

## Sections in This Prompt

| # | Section | Purpose |
|---|---|---|
| 1 | Inspect Before Installing | Understand the environment before touching anything |
| 2 | Clean Code Skill | Equip the agent with anti-spaghetti code rules |
| 3 | Anti-Spaghetti Rules | Document the rules explicitly in AGENT.md or RULES.md |
| 4 | Runtime Safety | Add error boundaries before building major UI flows |
| 5 | Spec Discipline | Follow project truth files before implementation |
| 6 | Delegation Runtime | Safe setup for agent delegation workflows |
| 7 | TDD / Test Discipline | Write failing tests before writing code |
| 8 | Hooks and Quality Gates | Add only the gates the project actually needs |
| 9 | Logo and Icon Rule | Follow the LobeHub icons policy for provider logos |
| 10 | Approval Report | Stop and wait before writing production code |

---

## Approval Gate Rule

![DON'T BREAK](../assets/badges/dont-break.svg)

> **DON'T BREAK:** The agent must verify every install command is valid in the local environment before running it. If a command fails verification, the agent must propose an alternative and wait for your approval before proceeding.

This applies to:

- `npx skills add ...` — verify `skills` CLI exists first
- Any `npm install -g ...` global install
- Any `setup`, `init`, or `link` commands
- Any command that modifies global system configuration

---

## Why This Matters

The most common vibe coding mistake is asking the agent to write production code before the agent has the operating context to write it well.

The Superhero Prompt fixes the order of operations:

1. Prepare the agent with the right skills and rules
2. Establish the runtime safety layer
3. Agree on quality gates
4. Review the approval report
5. Only then ask for implementation

> **Don't ask the agent to write clean code. Give it a clean-code operating system before it starts.**

---

## Related Lessons

- [Build Your Default Stack](../getting-started/03-build-your-default-stack.md) — where this prompt is introduced
- [Set Rules Before You Build](../getting-started/04-set-rules-before-you-build.md) — Agent rules and RULES.md setup
- [The First Slice](../getting-started/05-the-first-slice.md) — how to start the first implementation after setup

---

*← Back to [Playbook Templates](./README.md) | [Playbook Home](../README.md)*
