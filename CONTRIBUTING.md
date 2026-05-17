# Contributing Guide

Thanks for contributing to Link Shortener.

## Development setup

1. Fork and clone the repository.
2. Install dependencies:

```bash
pnpm install
```

3. Add environment variable in `.env`:

```env
MONGODB_URI=your-mongodb-connection-string
```

4. Run locally:

```bash
pnpm dev
```

## Before opening a pull request

- Run `pnpm lint`
- Run `pnpm build`
- Keep changes focused and minimal
- Update docs if behavior changes

## Commit and PR expectations

- Use clear commit messages
- Explain what changed and why
- Include screenshots for UI changes
- Link related issues when possible

## Code style

- TypeScript + existing project conventions
- Keep functions small and readable
- Avoid unrelated refactors in the same PR
