# Prompt Patterns Cheat Sheet

A quick reference for structuring prompts to get reliable, high-quality code.

---

## Pattern: Role-Context-Output (RCO)

Use this pattern to anchor the model's tone and expectations.

```markdown
Role: Senior CSS Architect
Context: vanillajs SPA using a dark mode palette.
Task: Create a modal layout with backdrop-filter glassmorphism.
Format: CSS only, nested syntax, inside a code block.
```

---

## Pattern: Adversarial Review

Before generating final outputs, instruct the model to audit its own assumptions.

```markdown
Analyze the proposed solution for:
1. Under-specified boundary cases
2. Redundant loops
Review findings first, then print the corrected code.
```

---

## Pattern: Few-Shot Structuring

Provide input-output examples directly in the prompt to enforce output format.

```markdown
Input: User details widget
Output: <div id="user-widget">...</div>

Input: Shopping cart dropdown
Output:
```
