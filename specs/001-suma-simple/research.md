# Research: Suma simple

## Decision 1: Use existing TypeScript + npm toolchain

- Decision: Keep TypeScript build with `tsc` and npm scripts already defined in package.json.
- Rationale: The project already compiles TypeScript and provides a `build` script, so no extra tooling is needed.
- Alternatives considered: Adding a bundler or framework (rejected to keep the UI simple and framework-free).

## Decision 2: Testing with Vitest

- Decision: Use Vitest (`npm test`) for the automated sum test.
- Rationale: Vitest is already configured in devDependencies and used by existing tests.
- Alternatives considered: Jest or Mocha (rejected to avoid changing the stack).

## Decision 3: Local run via static server or Docker

- Decision: Serve the static HTML with `http-server` (`npm run dev`) and support Docker via Dockerfile/docker-compose.
- Rationale: The repository already provides these scripts and container definitions for a simple local run.
- Alternatives considered: Introducing a framework dev server (rejected for simplicity).

## Decision 4: Deployment target

- Decision: Target Vercel for deployment using the existing `vercel.json` and GitHub integration.
- Rationale: Vercel is part of the project constraints and fits a static site deployment.
- Alternatives considered: Other static hosts (rejected to align with stated stack).
