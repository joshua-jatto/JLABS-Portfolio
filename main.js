//helper functions
function _(type) {
  return document.createElement(type);
} //call function with html element to create
function __(type) {
  return document.querySelector(type);
} //call function with html element to get/fetch

import projectsData from './projectsData.js'

const toggleMode = __(".toggle");
const body = __("body");
const quotesBox = __(".quotes");
const addQuoteBtn = __(".addbtn");
const getQuote = __(".get-quote");
const addQnN = __(".add-quote-and-name");
const nav = __("nav");

function darkModeToggle() {
  toggleMode.classList.toggle("active");
  body.classList.toggle("active");
}
toggleMode.addEventListener('click',()=> darkModeToggle())

let quoteMachine = [
  {
    quote: "I loved you first",
    quoter: "Jesus IAmthatIAm",
  },

  {
    quote: "God is always present, He's here now.",
    quoter: "I. MaryAnne",
  },

  {
    quote: "Only God knows how best to help a man",
    quoter: "S. Mone",
  },
  {
    quote: "How be it, It shall come to pass",
    quoter: "E. Gloria",
  },
  {
    quote: "...part of the journey is the end.",
    quoter: "Tony",
  },
  {
    quote: " In the end, it's you and God.",
    quoter: " J. Rebecca",
  },
  {
    quote: " Insist on winning",
    quoter: "O. Stephanie ",
  },
  {
    quote:
      "...comes great power, comes great responsibilty / To whom much is given, much shall be required.",
    quoter: "SpiderMan / st. Luke 12:48b",
  },
];

let magicNum = Math.floor(Math.random() * quoteMachine.length);

for (let i = magicNum; i <= quoteMachine.length; i++) {
  quotesBox.innerText = quoteMachine[i].quote + "\n~" + quoteMachine[i].quoter;
  break;
}

addQuoteBtn.addEventListener("click", () => {
  addQuoteBtn.style.display = "none";
  getQuote.style.display = "flex";
});

//add quote input validation //todo1
addQnN.addEventListener("click", (e) => {
  function Quote() {
    return {
      quote: __("#quote").value,
      quoter: __("#author").value,
    };
  }

  let newquote = Quote();
  window.localStorage.setItem("qoutesUpdate", JSON.stringify(newquote));

  let myQuote = window.localStorage.getItem("qoutesUpdate");

  getQuote.style.display = "none";
  quoteMachine.push(JSON.parse(myQuote));
  quotesBox.innerText =
    JSON.parse(myQuote).quote + "\n~" + JSON.parse(myQuote).quoter;

  e.preventDefault();
});

// #1todo fix localstorage to display items on qutoes

//implent dynamic loading of projects
//get parent div
const projectsContainer = __(".projects-container");


//initialize dynamic loading of data to ui
projectsData.length > 0
   ? projectsData.forEach((product) => {
    // Create a card div
    const card = document.createElement('div');
    card.className = 'card';
  
    // Create an image element
    const image = document.createElement('div');
    image.className = 'card-image';
    image.style.backgroundImage = product.imageSrc;
  
    // Create a title element
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = product.title;
  
    // Create a description element
    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = product.description;
  
    // Create a link element
    const link = document.createElement('a');
    link.target = '_blank'
    link.className = 'card-link';
    link.href = product.link;
    link.textContent = 'Check it out🚀';
  
    // Append elements to the card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);
  
    // Append the card to the product container
    projectsContainer.appendChild(card);
   }) : null