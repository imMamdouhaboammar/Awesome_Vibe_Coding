# AI Agent Playbook

Guidelines for structuring, instructing, and coordinating multi-agent systems and custom toolsets.

---

## 1. Defining Agent Capabilities

Define precise boundaries for agent roles to avoid overlaps and execution loops:
- **Research Agents**: Read-only access to search tools, codebase context, and documentation files.
- **Implementer Agents**: Authorized to write to filesystem, run test commands, and package scripts.
- **Auditor Agents**: Independent agents checking lint rules, safety logic, and test coverage targets.

---

## 2. Tool Coordination (MCP)

- Configure Model Context Protocol (MCP) servers locally to grant agent systems access to your current environment (e.g. database schemas, browser views, active log buffers).
- Limit tool parameters strictly to minimize input-argument generation errors.

---

## 3. Review Gates

- Always verify agent execution results using a validation subagent or human check.
- Record key architectural decisions to a shared repository history context.
