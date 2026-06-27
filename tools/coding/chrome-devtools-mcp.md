# Chrome DevTools MCP

![Category](https://img.shields.io/badge/Category-MCP%20Server-10B981?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-3B82F6?style=for-the-badge)
![Best For](https://img.shields.io/badge/Best%20For-Browser%20Testing-8B5CF6?style=for-the-badge)

## What it is
Chrome DevTools MCP is a Model Context Protocol server that connects AI coding agents directly to Chrome browser instances, giving them the ability to navigate, inspect, and interact with web pages.

## Why it matters
AI agents can read clientside console logs, trace failed API network requests, click interface buttons, and debug layout bugs dynamically, removing manual validation steps from the vibe coding cycle.

## Best use cases
- End-to-end user flow testing.
- Reviewing clientside errors and JavaScript trace exceptions.
- Visual auditing and layout diagnostics.

## How it helps
- Allows agents to run tests on staging environments.
- Automatically captures console trace blocks when failures occur.
- Enables visual screenshots and HTML tree retrieval from the model loop.

## Installation prompt
```txt
I want to add the Chrome DevTools MCP server to my local AI agent configuration.
Please:
1. Locate the configuration file for my agent client (e.g. cursor-config.json, claude_desktop_config.json).
2. Write the JSON configuration block referencing chrome-devtools-mcp.
3. Provide instructions on starting Chrome with remote debugging enabled.
```

## Usage prompt
```txt
Use the chrome-devtools-mcp server to:
1. Launch a browser page to http://localhost:3000.
2. Click the login button and enter test user credentials.
3. Check the browser console logs and report any warning or error messages.
```

## Notes
Requires a running Chrome instance with remote debugging enabled (usually on port 9222).

## Links
- Official Repo: [https://github.com/mamdouhaboammar/chrome-devtools-mcp](https://github.com/mamdouhaboammar/chrome-devtools-mcp)
