# Data Model: Suma simple

## Entity: Calculo

Represents a sum operation with validation state.

### Fields

- `operandA` (number): First input value.
- `operandB` (number): Second input value.
- `result` (number | null): Sum result when inputs are valid; null when invalid.
- `isValid` (boolean): Indicates whether both inputs are valid numbers.
- `errorMessage` (string | null): Validation error message when inputs are invalid.

### Validation Rules

- `operandA` and `operandB` must be parseable as numbers.
- Empty input is invalid.
- When invalid, `result` is null and `errorMessage` is set.

### State Transitions

- Empty or invalid inputs -> `isValid = false`, `result = null`.
- Valid inputs -> `isValid = true`, `result = operandA + operandB`.
