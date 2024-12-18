/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//This code will randomly show quotes from an array everytime someone clicks the button

//The array of quote objects

let quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "Whenever you feel like criticizing any one... just remember that all the people in this world haven't had the advantages that you've had.",
    source: "F. Scott Fitzgerald",
    citation: "The Great Gatsby",
    year: "1925"
  },
  {
    quote: "She burned too bright for this world.",
    source: "Emily Bronte",
    citation: "Wuthering Heights"
  },
  {
    quote: "For all evils there are two remedies - time and silence.",
    source: "Alexandre Dumas",
    citation: "The Count of Monte Cristo",
    year: "1844"
  },
  {
    quote: "Unable are the loved to die for love is immortality.",
    source: "Emily Dickinson"
  },
  {
    quote: "We are all broken, that's how the light gets in.",
    source: "Ernest Hemingway"
  }
];

//A function that returns a random quote from the provided array of quote objects

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

//A function that displays the random quote from the quotes array in the html

function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);