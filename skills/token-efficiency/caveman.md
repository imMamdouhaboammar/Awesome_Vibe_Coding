# Caveman

<img src="../../assets/badges/premium-pick.svg" alt="Premium Pick" height="28" />

![Token Saver](https://img.shields.io/badge/Token%20Saver-111827?style=for-the-badge)
![Agent Skill](https://img.shields.io/badge/Agent%20Skill-8B5CF6?style=for-the-badge)
![Claude Code](https://img.shields.io/badge/Claude%20Code-3B82F6?style=for-the-badge)
![Output Compression](https://img.shields.io/badge/Output%20Compression-F59E0B?style=for-the-badge)

## Tags

`premium-pick` `token-efficiency` `claude-code` `codex` `gemini` `cursor` `windsurf` `agent-skills` `prompt-compression` `vibe-coding`

## What it is

Caveman is a token-efficiency skill for AI coding agents.

It makes the agent reply in a compressed “caveman” style: fewer words, less filler, same technical substance.

Official repo:
[https://github.com/JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

## Why it is a Premium Pick

Caveman earns Premium Pick because it solves one of the most common problems in AI coding workflows: verbose agent output.

In long vibe-coding sessions, the agent often wastes tokens on polite filler, repeated explanations, hedging, and long summaries. Caveman reduces that waste by forcing shorter technical replies while keeping commands, code, paths, errors, and important details exact.

It is not just funny. It is useful because it makes coding sessions faster to read, cheaper to run, and easier to scan.

## Best use cases

### 1. Long coding sessions
Use it when you are working through a feature, refactor, bug fix, or multi-step implementation and do not want the agent to spend tokens on long explanations.

### 2. Claude Code workflows
Useful for Claude Code users who want tighter replies, shorter reviews, and less repeated wording.

### 3. Codex, Gemini, Cursor, Windsurf, and other agents
Good when your AI coding assistant supports skill files, rules, plugins, or persistent instructions.

### 4. PR reviews
Useful when you want short review comments that focus on the exact issue.

### 5. Commit messages
Helpful when you want short conventional commit messages without long explanations.

### 6. Memory compression
Useful when you want to shrink memory files like `CLAUDE.md`, project notes, or agent instructions so every new session starts with fewer input tokens.

## How it helps in real work

* Reduces verbose AI replies
* Makes technical answers easier to scan
* Helps cut output token cost
* Keeps commands and code unchanged
* Preserves technical meaning
* Helps with shorter PR comments
* Helps with shorter commit messages
* Can compress agent memory files
* Makes long agent sessions less mentally noisy

## Good fit for

* Vibe coders
* Claude Code users
* Cursor users
* Codex users
* Gemini CLI users
* Windsurf users
* Developers running long AI coding sessions
* People who care about token cost and readability
* Teams that want shorter agent comments and reviews

## Not a good fit for

* Beginner explanations where detail matters
* Product strategy or creative writing
* UX copywriting
* Documentation writing
* Situations where tone, nuance, or persuasion matter
* Any task where the final output must sound polished to humans

## Installation prompt

Copy this prompt and give it to your coding agent:

```txt
I want you to install and configure Caveman for my current AI coding setup.

Official repo:
https://github.com/JuliusBrussee/caveman

Your task:
1. Detect which AI coding agent or environment I am using.
2. Read the official Caveman install instructions.
3. Install Caveman using the recommended method for this environment.
4. Use a scoped installation if possible. Do not modify unrelated global settings unless needed.
5. Verify that Caveman was installed correctly.
6. Do not make unrelated project changes.
7. If installation needs a manual step, stop and tell me exactly what I need to do.

After installation, give me:
- What was installed
- Which command was used
- Which agent was configured
- How to activate Caveman
- How to disable Caveman
- How to update it later
- Any limitations or risks
```

## Quick install reference

```bash
# macOS / Linux / WSL / Git Bash
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash

# Windows PowerShell
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

## Usage prompt after installation

```txt
Use Caveman mode for this task.

Keep replies short.
Drop filler.
Keep all technical meaning.
Keep code, commands, paths, API names, and error messages exact.
Do not over-explain unless I ask.

Task:
[describe your task here]
```

## Example workflow

```txt
Use Caveman mode.

Review this pull request.
Give me only:
1. Real bugs
2. Risky logic
3. Security issues
4. Missing tests
5. Short fix suggestions

No praise.
No long explanation.
```

## Quality checklist

Before using Caveman for a task, check:

* Is this a coding or technical task?
* Is brevity more useful than explanation?
* Will compressed output still be understandable?
* Are exact commands, paths, errors, and code preserved?
* Is this not a final user-facing copywriting task?

## Notes

Caveman is best used as a working mode, not as a writing style for every output.

Use it during coding, debugging, reviewing, planning, and memory compression.

Avoid it when you need detailed teaching, brand writing, sales copy, documentation, or polished human communication.

## Links

* GitHub: [https://github.com/JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)
* Install guide: [https://github.com/JuliusBrussee/caveman/blob/main/INSTALL.md](https://github.com/JuliusBrussee/caveman/blob/main/INSTALL.md)

---

## Special Thanks

Special thanks to [@JuliusBrussee](https://github.com/JuliusBrussee) for creating and maintaining the amazing [Caveman](https://github.com/JuliusBrussee) repository! Your contribution significantly enhances the vibe coding ecosystem. 🌟
