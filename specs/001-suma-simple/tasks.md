# Tasks: Suma simple

**Input**: Design documents from `/specs/001-suma-simple/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: Included (spec requires an automated sum test).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and alignment

- [x] T001 Review build output and align script entry in tsconfig.json and index.html

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core logic required by all user stories

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 [P] Implement sum and validation helper in src/sum.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Ver resultado de suma (Priority: P1) 🎯 MVP

**Goal**: Allow users to input two numbers and see the sum on screen.

**Independent Test**: Enter two valid numbers and verify the displayed result equals their sum.

### Implementation for User Story 1

- [x] T003 [P] [US1] Add inputs, action button, result container, and minimal styles in index.html
- [x] T004 [P] [US1] Wire UI to compute and render sum for valid inputs in src/main.ts

**Checkpoint**: User Story 1 is fully functional and testable independently

---

## Phase 4: User Story 2 - Validar manejo de entradas invalidas (Priority: P2)

**Goal**: Show a clear error message when inputs are not valid numbers.

**Independent Test**: Enter non-numeric input and verify an error appears while the result is cleared.

### Implementation for User Story 2

- [x] T005 [US2] Add validation flow to show error message and clear result in src/main.ts

**Checkpoint**: User Story 2 is independently functional

---

## Phase 5: User Story 3 - Demostrar ejecucion de prueba automatizada (Priority: P3)

**Goal**: Provide an automated test that validates the sum logic.

**Independent Test**: Run `npm test` and confirm the sum test passes.

### Tests for User Story 3

- [x] T006 [P] [US3] Add/extend Vitest coverage for sum helper in test/sum.test.ts

**Checkpoint**: User Story 3 is independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final checks that touch documentation and usability

- [x] T007 [P] Validate quickstart steps and update specs/001-suma-simple/quickstart.md if needed

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational - no dependencies on other stories
- **User Story 2 (P2)**: Starts after User Story 1 (shares UI from US1)
- **User Story 3 (P3)**: Starts after Foundational - independent of UI work

### Parallel Opportunities

- **Phase 2**: T002 can run in parallel with documentation checks if needed
- **User Story 1**: T003 (index.html) and T004 (src/main.ts) can run in parallel
- **User Story 3**: T006 can run in parallel with UI tasks once Foundation is ready
- **Polish**: T007 can run in parallel after user stories are done

---

## Parallel Example: User Story 1

```bash
Task: "Add inputs, action button, result container, and minimal styles in index.html"
Task: "Wire UI to compute and render sum for valid inputs in src/main.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. STOP and validate User Story 1 independently

### Incremental Delivery

1. Setup + Foundational
2. User Story 1 -> Test independently -> Demo
3. User Story 2 -> Test independently -> Demo
4. User Story 3 -> Run tests -> Demo
5. Polish updates
