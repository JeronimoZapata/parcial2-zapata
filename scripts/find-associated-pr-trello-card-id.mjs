const {
  GITHUB_REPOSITORY,
  GITHUB_SHA,
  GITHUB_TOKEN,
} = process.env;

const fallbackText = process.argv.slice(2).join(" ");

function extractTrelloCardId(text) {
  if (!text) return "";

  const patterns = [
    /TRELLO_CARD_ID\s*[:=]\s*([a-fA-F0-9]{24})/,
    /\[TRELLO:\s*([a-fA-F0-9]{24})\]/,
    /TRELLO:\s*([a-fA-F0-9]{24})/,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);

    if (match?.[1]) {
      return match[1];
    }
  }

  return "";
}

const fallbackCardId = extractTrelloCardId(fallbackText);

if (fallbackCardId) {
  console.log(fallbackCardId);
  process.exit(0);
}

if (!GITHUB_REPOSITORY || !GITHUB_SHA || !GITHUB_TOKEN) {
  console.log("");
  process.exit(0);
}

const url = `https://api.github.com/repos/${GITHUB_REPOSITORY}/commits/${GITHUB_SHA}/pulls`;

try {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`GitHub API error ${response.status}: ${body}`);
    console.log("");
    process.exit(0);
  }

  const pullRequests = await response.json();

  if (!Array.isArray(pullRequests) || pullRequests.length === 0) {
    console.log("");
    process.exit(0);
  }

  const associatedPullRequest =
    pullRequests.find((pr) => pr.merged_at) ?? pullRequests[0];

  const textToSearch = [
    associatedPullRequest.title,
    associatedPullRequest.body,
    associatedPullRequest.head?.ref,
  ]
    .filter(Boolean)
    .join(" ");

  const cardId = extractTrelloCardId(textToSearch);

  console.log(cardId);
} catch (error) {
  console.error(error);
  console.log("");
  process.exit(0);
}