# Research: Agrandar el titulo Parcial 2

## Decision 1: Adjust the existing `h1` styling in the static page

- Decision: Increase the visual size or prominence of the existing title directly in the page stylesheet.
- Rationale: The feature is a narrow presentational change, and the current implementation already renders the title in `index.html`.
- Alternatives considered: Introducing a framework, moving styles into a new CSS pipeline, or changing the title text itself.

## Decision 2: Keep the change isolated to presentation only

- Decision: Do not alter the TypeScript sum logic, inputs, or result behavior.
- Rationale: The request is only to make the title look more like a title, so functional behavior should remain stable.
- Alternatives considered: Restructuring the page layout or adding new UI states.

## Decision 3: Validate with existing build and test commands plus a manual browser check

- Decision: Use `npm run build`, `npm run test:coverage`, and a browser review of the rendered heading to confirm the change.
- Rationale: These checks already exist in the repository and cover the required compile/test path.
- Alternatives considered: Adding new automated visual tooling for a one-line title adjustment.

## Decision 4: No external contracts are required

- Decision: Skip contract artifacts.
- Rationale: This feature does not expose a new API, CLI, or other external interface.
- Alternatives considered: Creating a contract document for a purely internal style change.