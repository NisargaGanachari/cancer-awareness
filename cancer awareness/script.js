const quoteBox = document.getElementById('quoteBox');

async function getQuote() {
  try {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quoteBox.innerHTML = `"${data.content}" — <strong>${data.author}</strong>`;
  } catch (err) {
    quoteBox.innerHTML = `"Hope is stronger than fear." — Unknown`;
  }
}
if (quoteBox) getQuote();
