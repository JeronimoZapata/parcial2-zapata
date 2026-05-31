import fs from "node:fs";
import path from "node:path";

// Read Trello card metadata from environment variables.
const {
  TRELLO_CARD_ID,
  TRELLO_CARD_NAME,
  TRELLO_CARD_URL,
  TRELLO_CARD_DESCRIPTION,
} = process.env;

// Fail fast if required fields are missing.
if (!TRELLO_CARD_ID || !TRELLO_CARD_NAME) {
  throw new Error("Missing required Trello card data.");
}

// Create a safe, short file-name slug from the Trello title.
function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

// Build output path using a short ID and slugified title.
const shortCardId = TRELLO_CARD_ID.slice(0, 8);
const safeName = slugify(TRELLO_CARD_NAME) || "trello-card";
const directory = "spec-inputs";
const filePath = path.join(directory, `${shortCardId}-${safeName}.md`);

// Ensure output folder exists.
fs.mkdirSync(directory, { recursive: true });

// Compose the Markdown content for SpecKit input.
const content = `# SpecKit Input — ${TRELLO_CARD_NAME}

## Trello Metadata

- Trello Card ID: \`${TRELLO_CARD_ID}\`
- Trello Card URL: ${TRELLO_CARD_URL || "No disponible"}
- Source: Trello
- Generated for: SpecKit
- Status: Pending local SpecKit generation

## Original Trello Description

${TRELLO_CARD_DESCRIPTION || "La tarjeta no tenía descripción."}

## Prompt para ejecutar con SpecKit

Copiar el siguiente contenido y ejecutarlo en el agente local con:

\`/speckit.specify\`

\`\`\`text
Crear una especificación funcional para la siguiente tarjeta de Trello.

Título:
${TRELLO_CARD_NAME}

Descripción:
${TRELLO_CARD_DESCRIPTION || "La tarjeta no tenía descripción."}

Contexto técnico del proyecto:
- Proyecto académico de Integración y Entrega Continua.
- TypeScript puro.
- npm como gestor de paquetes.
- Vitest para pruebas automatizadas.
- ESLint para inspección local y en CI.
- Docker para ejecución local reproducible.
- GitHub Actions como servidor de CI/CD.
- SonarQube Cloud para inspección de código y Quality Gate.
- Vercel como entorno de entrega.
- Trello como herramienta de seguimiento funcional.

Restricciones:
- No usar frameworks de frontend.
- Mantener la funcionalidad simple y demostrable.
- La implementación debe poder probarse con \`npm run test:coverage\`.
- La implementación debe poder compilar con \`npm run build\`.
- La solución debe respetar la constitución del proyecto en \`.specify/memory/constitution.md\`.

Resultado esperado:
- Una spec clara, breve y verificable.
- Requisitos funcionales.
- Criterios de aceptación.
- Escenarios de prueba.
- No implementar código todavía.
\`\`\`

## Próximo paso manual

1. Ejecutar \`git pull origin main\`.
2. Abrir este archivo.
3. Copiar el prompt anterior.
4. Ejecutar \`/speckit.specify\` en el agente local.
5. Confirmar que SpecKit cree la rama correspondiente y la carpeta \`specs/<numero>-<feature>/spec.md\`.
`;

// Write the file to disk.
fs.writeFileSync(filePath, content, "utf8");

// Print the output path for callers (e.g., CI steps).
console.log(`file_path=${filePath}`);

// Also export the path for GitHub Actions, if available.
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `file_path=${filePath}\n`);
}