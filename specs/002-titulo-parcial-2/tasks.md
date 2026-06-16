# Tasks: Agrandar el titulo Parcial 2

**Input**: Design documents from `/specs/002-titulo-parcial-2/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: No test tasks included because the specification does not explicitly request TDD. Validation is covered in the polish phase with existing build and coverage commands.

**Organization**: Tasks are grouped by user story to keep the title change independently understandable and verifiable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the page surface and the file that owns the title styling before making the change

- [ ] T001 Review the current title markup and page structure in index.html to confirm the h1 is the only presentation target

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the narrow styling approach that keeps the change isolated to the existing static page

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T002 Define the responsive heading sizing rule in index.html so the title can be enlarged without touching the calculator markup or TypeScript entrypoint in src/main.ts

**Checkpoint**: Foundation ready - the title styling approach is isolated and the user stories can now be completed in order

---

## Phase 3: User Story 1 - Titulo principal mas prominente (Priority: P1) 🎯 MVP

**Goal**: Make the Parcial 2 heading read clearly as the primary title on the page

**Independent Test**: Open the page and verify that Parcial 2 is visually larger and more prominent than the supporting metadata and calculator text

### Implementation for User Story 1

- [X] T003 [US1] Increase the h1 prominence in index.html so the Parcial 2 title is visibly larger than the surrounding content

**Checkpoint**: At this point, User Story 1 should be fully functional and visually testable independently

---

## Phase 4: User Story 2 - Mantener la experiencia existente (Priority: P2)

**Goal**: Preserve the rest of the page layout while the title gains prominence

**Independent Test**: Verify that the metadata, calculator section, and spacing in index.html still look and behave as before after the title change

### Implementation for User Story 2

- [ ] T004 [US2] Constrain the title-only style change in index.html so the supporting text, calculator card, and layout spacing remain unchanged

**Checkpoint**: At this point, the page keeps its existing experience while the title remains more prominent

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final verification that the feature still compiles and the existing automated checks remain green

- [ ] T005 Verify the feature with npm run build and npm run test:coverage from the repository root

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on User Story 1 and User Story 2 being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 and delivers the main visible improvement
- **User Story 2 (P2)**: Can start after Phase 2 and confirms the rest of the page stays intact

### Within Each User Story

- Complete the title sizing change before validating the surrounding layout behavior
- Keep the change inside index.html so the implementation stays isolated from the TypeScript logic in src/main.ts
- Validate the resulting page visually before moving to polish

### Parallel Opportunities

- Setup and Foundational work are both single-surface tasks and should be kept sequential for this small change
- User Story 1 and User Story 2 remain independently reviewable, but both touch the same file and are best executed in order here
- The polish validation in T005 can run after the implementation tasks without requiring any additional code changes

---

## Parallel Example: User Story 1

```bash
# This feature is intentionally small, so the main work is sequential:
Task: "Increase the h1 prominence in index.html so the Parcial 2 title is visibly larger than the surrounding content"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Stop and visually validate that Parcial 2 now reads as the main title

### Incremental Delivery

1. Establish the title sizing approach in index.html
2. Deliver the larger title as the MVP
3. Confirm the rest of the page remains unchanged
4. Run build and coverage checks before closing the feature

### Small-Scope Delivery Strategy

1. Keep all presentation changes in index.html
2. Avoid touching src/main.ts or src/sum.ts because the feature is strictly visual
3. Use the existing npm scripts as the final verification gate

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] labels map tasks to specific user stories for traceability
- Each user story stays independently understandable even though the change is small
- Avoid introducing new assets, scripts, or frameworks for this feature