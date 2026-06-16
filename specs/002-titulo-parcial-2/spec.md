# Feature Specification: Agrandar el titulo Parcial 2

**Feature Branch**: `[002-titulo-parcial-2]`

**Created**: 2026-06-16

**Status**: Draft

**Input**: User description: "Crear una especificación funcional para la siguiente tarjeta de Trello.

Título:
Agrandar el titulo Parcial 2

Descripción:
Quiero que agrandemos el titulo de la página que dice “Parcial 2“ . Quiero que se vea un poco mas grande para que se note que es un título

Contexto técnico del proyecto:
- Proyecto académico de Integración y Entrega Continua.
- TypeScript puro.
- npm como gestor de paquetes.
- Vitest para pruebas automatizadas.
- ESLint para inspección local y en CI.
- Docker para ejecución local reproducible.
- GitHub Actions como servidor de CI/CD.
- SonarQube Cloud como inspección de código y Quality Gate.
- Vercel como entorno de entrega.
- Trello como herramienta de seguimiento funcional.

Restricciones:
- No usar frameworks de frontend.
- Mantener la funcionalidad simple y demostrable.
- La implementación debe poder probarse con `npm run test:coverage`.
- La implementación debe poder compilar con `npm run build`.
- La solución debe respetar la constitución del proyecto en `.specify/memory/constitution.md`.

Resultado esperado:
- Una spec clara, breve y verificable.
- Requisitos funcionales.
- Criterios de aceptación.
- Escenarios de prueba.
- No implementar código todavía."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Titulo principal mas prominente (Priority: P1)

Como visitante de la pagina, quiero que el titulo "Parcial 2" se vea mas grande para identificar rapidamente el encabezado principal de la pantalla.

**Why this priority**: Es el unico cambio visible solicitado y define el valor principal de la tarjeta.

**Independent Test**: Se abre la pagina y se verifica visualmente que "Parcial 2" destaca como titulo principal sin cambiar el contenido ni la funcion de la pagina.

**Acceptance Scenarios**:

1. **Given** la pagina cargada, **When** observo el encabezado principal, **Then** "Parcial 2" se muestra con mayor prominencia visual que el texto circundante.
2. **Given** la pagina cargada en un ancho de pantalla comun, **When** reviso el diseño, **Then** el titulo sigue siendo legible y no se superpone con otros elementos.
3. **Given** la pagina cargada, **When** comparo la informacion mostrada antes y despues del cambio, **Then** el unico cambio perceptible es el aumento de jerarquia visual del titulo.

---

### User Story 2 - Mantener la experiencia existente (Priority: P2)

Como usuario, quiero que el ajuste del titulo no altere otras partes visibles de la pagina para seguir usando la aplicacion como antes.

**Why this priority**: El cambio debe ser puntual y no introducir efectos secundarios en el resto de la vista.

**Independent Test**: Se verifica que el resto de la pagina conserva su comportamiento y contenido habitual mientras el titulo gana presencia.

**Acceptance Scenarios**:

1. **Given** la pagina cargada, **When** interactuo con el contenido existente, **Then** la experiencia previa se mantiene sin cambios funcionales.

---

### Edge Cases

- Si la pantalla es estrecha, el titulo sigue siendo visible sin romper el orden visual.
- Si el contenido circundante cambia de longitud, el titulo conserva su jerarquia visual.
- Si el navegador aplica escalado normal del sistema, el titulo sigue siendo claramente identificable como encabezado principal.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El sistema MUST mostrar el titulo "Parcial 2" con mayor prominencia visual que el contenido de apoyo de la pagina.
- **FR-002**: El sistema MUST conservar el texto del titulo sin modificar su significado ni su contenido.
- **FR-003**: El sistema MUST limitar el cambio al refuerzo visual del titulo, sin introducir cambios funcionales en el resto de la pagina.
- **FR-004**: El sistema MUST mantener el titulo legible en pantallas comunes de escritorio y dispositivos moviles.
- **FR-005**: El sistema MUST permitir verificar el cambio mediante una revision visual y una prueba automatizada del proyecto.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un evaluador identifica el titulo principal en menos de 3 segundos al abrir la pagina.
- **SC-002**: En al menos 2 tamaños de pantalla de uso comun, el titulo permanece legible y sin superposiciones visibles.
- **SC-003**: El cambio puede demostrarse sin afectar el contenido ni las acciones existentes de la pagina.
- **SC-004**: La verificacion del ajuste del titulo se completa dentro de una sesion de revision breve, sin necesidad de pasos manuales complejos.

## Assumptions

- "Parcial 2" es el titulo principal visible de la pagina.
- El cambio solicitado es un ajuste moderado de jerarquia visual, no un rediseño completo.
- La funcionalidad existente de la pagina debe permanecer intacta.
- No se requieren datos nuevos, almacenamiento adicional ni permisos especiales.
