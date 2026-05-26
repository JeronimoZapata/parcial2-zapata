// Read the input text from command-line arguments.
const text = process.argv.slice(2).join(" ");

// Supported formats for Trello card IDs embedded in text.
const patterns = [
  /TRELLO_CARD_ID=([a-fA-F0-9]{24})/,
  /\[TRELLO:\s*([a-fA-F0-9]{24})\]/,
];

// Scan the text for the first matching Trello card ID.
for (const pattern of patterns) {
  const match = text.match(pattern);

  // Print the first captured card ID and exit.
  if (match?.[1]) {
    console.log(match[1]);
    process.exit(0);
  }
}

// No ID found; return an empty string.
console.log("");