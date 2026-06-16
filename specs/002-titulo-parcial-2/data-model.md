# Data Model: Agrandar el titulo Parcial 2

## Scope

This feature does not introduce persistent data or new domain entities. The change is limited to the presentation of the existing page heading.

## UI Element: Page Title

### Attributes

- `text`: The visible title string, currently `Parcial 2`.
- `prominence`: The visual emphasis applied to the heading.
- `responsiveness`: The heading must remain readable across common viewport sizes.

### Validation Rules

- The title text must remain unchanged.
- The heading must remain visually distinct from the supporting text.
- The adjusted size must not cause overlap or layout breakage in the page shell.

### State

- No persistent state is stored.
- The title is rendered as part of the static page and only its visual presentation changes.