
window.onload = init;
function init() {
  generateQuote();
}

function generateQuote(){
  // randomly generate a number between 0 and length of quote array
  let randomIndex = Math.floor(Math.random()*QUOTEBANK.length);

  // the random number will be used to index quotes/authors and display
  let randomQuote = QUOTEBANK[randomIndex].quote;
  let randomAuthor = QUOTEBANK[randomIndex].author;

  // set up twitter link
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

  // quote and author regex to format as URL
  let quoteInApiForm = randomQuote.replace(/\s/g, "%20");
  let authorInApiForm = randomAuthor.replace(/\s/g, "%20");
  quoteInApiForm = quoteInApiForm.replace(/,/g, "%2C");

  // concatonate base twitter link with formatted quote and author
  twitterLink += quoteInApiForm + " -" + authorInApiForm;

  // set element text values
  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuote;
  document.getElementById("author").innerText = randomAuthor;
}
