# GitHub Actions

![Category](https://img.shields.io/badge/Category-CI%20%2F%20CD-10B981?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-3B82F6?style=for-the-badge)
![Best For](https://img.shields.io/badge/Best%20For-Automated%20Pipelines-8B5CF6?style=for-the-badge)

## What it is
GitHub Actions is an automation runner engine built directly into GitHub, running compilation tests, unit checks, security audits, and deployment scripts on commit triggers.

## Why it matters
Protects codebase integrity by running testing processes automatically on every pull request, ensuring no broken code reaches the production branch.

## Best use cases
- Automated execution of unit and integration test suites.
- Code style validation and lint checks on git push events.
- Deploying staging builds to Firebase Hosting or Cloud Run.

## How it helps
- Runs code builds in clean, containerized environments.
- Automatically rejects merging when tests or build steps fail.
- Simplifies multi-stage shipping pipelines.

## Installation prompt
```txt
I want to write a GitHub Actions workflow to build and test my Node.js app on every pull request.
Create a workflow file .github/workflows/ci.yml that:
1. Triggers on pull requests to the main branch.
2. Checks out the repository.
3. Installs project dependencies.
4. Executes the "npm run test" command.
```

## Usage prompt
```txt
Create a deployment step in our GitHub Actions workflow that executes "npm run deploy" only when changes are merged into the main branch.
```

## Notes
Requires configuration of runner secrets for third-party service connections.

## Links
- Website: [https://github.com/features/actions](https://github.com/features/actions)
