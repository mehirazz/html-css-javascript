// Random Quote Generator
const quotes = [
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else will do it for you.",
  "Dream it. Wish it. Do it."
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

console.log(getRandomQuote());
