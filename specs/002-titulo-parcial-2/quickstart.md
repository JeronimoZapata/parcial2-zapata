# Quickstart: Agrandar el titulo Parcial 2

## Prerequisites

- Node.js 22+
- npm
- Docker (optional)

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

## Test

```bash
npm run test:coverage
```

## Lint

```bash
npm run lint
```

## Run locally

```bash
npm run dev
```

Open the site at http://localhost:5173 and verify that the `Parcial 2` heading is visibly larger than the surrounding supporting text.

## Run with Docker

```bash
docker compose up --build
```

Then open http://localhost:5173 and confirm the title emphasis is preserved.

## Manual Verification

1. Load the page in a desktop browser.
2. Confirm that `Parcial 2` reads as the primary heading.
3. Resize to a narrower viewport and confirm the title stays legible without overlap.

## Deploy

- The app remains a static site and continues to deploy through the existing Vercel setup.