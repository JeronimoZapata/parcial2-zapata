// Load required environment variables provided by the workflow.
const {
  TRELLO_API_KEY,
  TRELLO_API_TOKEN,
  TRELLO_CARD_ID,
  TRELLO_DONE_LIST_ID,
  FEEDBACK_STATUS,
  GITHUB_SERVER_URL,
  GITHUB_REPOSITORY,
  GITHUB_RUN_ID,
  GITHUB_SHA,
} = process.env;

// Fail fast when Trello credentials are missing.
if (!TRELLO_API_KEY || !TRELLO_API_TOKEN) {
  throw new Error("Missing Trello credentials.");
}

// Skip if there is no Trello card to comment on.
if (!TRELLO_CARD_ID) {
  console.log("No Trello card ID found. Skipping Trello feedback.");
  process.exit(0);
}

// Build the GitHub Actions run URL and a short commit reference.
const runUrl = `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;
const shortSha = GITHUB_SHA ? GITHUB_SHA.slice(0, 7) : "unknown";

// Map workflow statuses to Trello comment messages.
const messages = {
  ci_failed: `❌ CI falló para el commit ${shortSha}.\n\nVer ejecución: ${runUrl}`,
  ci_passed: `✅ CI pasó correctamente para el commit ${shortSha}.\n\nVer ejecución: ${runUrl}`,
  deploy_succeeded: `✅ CI pasó y el despliegue a Vercel se realizó correctamente para el commit ${shortSha}.\n\nVer ejecución: ${runUrl}`,
  deploy_failed: `⚠️ CI pasó, pero falló el despliegue a Vercel para el commit ${shortSha}.\n\nVer ejecución: ${runUrl}`,
};

// Pick the message for the current workflow status.
const text = messages[FEEDBACK_STATUS];

// Guard against invalid status values.
if (!text) {
  throw new Error(`Invalid FEEDBACK_STATUS: ${FEEDBACK_STATUS}`);
}

// Base endpoint for Trello REST API calls.
const trelloBaseUrl = "https://api.trello.com/1";

// Send a request to the Trello API with auth and optional query params.
async function trelloRequest(path, options = {}) {
  const url = new URL(`${trelloBaseUrl}${path}`);

  url.searchParams.set("key", TRELLO_API_KEY);
  url.searchParams.set("token", TRELLO_API_TOKEN);

  if (options.query) {
    for (const [key, value] of Object.entries(options.query)) {
      url.searchParams.set(key, value);
    }
  }

  const response = await fetch(url, {
    method: options.method ?? "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Trello API error ${response.status}: ${body}`);
  }

  return response.json();
}

// Post the workflow status comment to the Trello card.
await trelloRequest(`/cards/${TRELLO_CARD_ID}/actions/comments`, {
  method: "POST",
  query: {
    text,
  },
});

// Move the card to Done when deploy succeeds and the list is configured.
if (FEEDBACK_STATUS === "deploy_succeeded" && TRELLO_DONE_LIST_ID) {
  await trelloRequest(`/cards/${TRELLO_CARD_ID}`, {
    method: "PUT",
    query: {
      idList: TRELLO_DONE_LIST_ID,
    },
  });
}

// Log the outcome for workflow visibility.
console.log(`Trello feedback sent with status: ${FEEDBACK_STATUS}`);