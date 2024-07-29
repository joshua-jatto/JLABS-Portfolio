//helper functions
function _(type) { return document.createElement(type) } //call function with html element to create
function __(type) { return document.querySelector(type) } //call function with html element to get/fetch


const toggleMode = __('.toggle')
const body = __('body')
const quotesBox = __('.quotes')
const addQuoteBtn = __('.addbtn')
const getQuote = __('.get-quote')
const addQnN = __('.add-quote-and-name')
const nav = __('nav')


function darkModeToggle() {

    toggleMode.classList.toggle('active');
    body.classList.toggle('active')

    console.log('toggled')
}

let quoteMachine = [{
    quote: "I loved you first",
    quoter: "Jesus IAmthatIAm"
},

{
    quote: "God is always present, He's here now.",
    quoter: "I. MaryAnne"
},

{
    quote: "Only God knows how best to help a man",
    quoter: "S. Mone"
},
{
    quote: "How be it, It shall come to pass",
    quoter: "E. Gloria"
},
{
    quote: "...part of the journey is the end.",
    quoter: "Tony"
},
{
    quote: " In the end, it's you and God.",
    quoter: " J. Rebecca"
},
{
    quote: " Insist on wining",
    quoter: "O. Stephanie "
},
{
    quote: "...comes great power, comes great responsibilty / To whom much is given, much shall be required.",
    quoter: "SpiderMan / st. Luke 12:48b"
},
];

let magicNum = Math.floor(Math.random() * quoteMachine.length);

for (let i = magicNum; i <= quoteMachine.length; i++) {
    quotesBox.innerText = quoteMachine[i].quote + "\n~" + quoteMachine[i].quoter
    break;
};

addQuoteBtn.addEventListener('click', () => {
    addQuoteBtn.style.display = 'none';
    getQuote.style.display = 'flex';
})

//add quote input validation //todo1
addQnN.addEventListener('click', (e) => {

    function Quote() {
        return {
            quote: __('#quote').value,
            quoter: __('#author').value
        }
    }

    let newquote = Quote()
    window.localStorage.setItem('qoutesUpdate', JSON.stringify(newquote));

    let myQuote = window.localStorage.getItem('qoutesUpdate');

    getQuote.style.display = 'none'
    quoteMachine.push(JSON.parse(myQuote));
    quotesBox.innerText = JSON.parse(myQuote).quote + "\n~" + JSON.parse(myQuote).quoter;

    e.preventDefault()
});

// #1todo fix localstorage to display items on qutoes


//implent dynamic loading of projects
//get parent div
const projectsContainer = __('.projects-container');
//create prjects data
const projectsData = [
    {
        id: 1,
        title: 'Aim Trainer',
        imageSrc: 'url(./assets/AimTrainer_Desktop.html.png)',
        description: 'Randomly click the box (shooter game concept)',
        link: './project-pages/project-1.html',
    },
    {
        id: 2,
        title: 'Speedy Fabricator',
        imageSrc: 'url(./assets/Speedy-banner.png)',
        description: 'Aluminium window maker app for Engineers💪',
        link: ' https://joshua-jatto.github.io/JLABS-Speedy_ACP/',

    },
    {
        id: 3,
        title: 'Rycipee-finder',
        imageSrc: 'url(./assets/Rycipee-banner.png)',
        description: 'Search recipes online😋',
        link: 'https://joshua-jatto.github.io/Rycipee-finder/',

    },
    // {
    //     id:4, //update id count on next item
    //     title:'',
    //     imageSrc:'url(./assets/...)',
    //     description:'eep it short💪',
    //     link:'https://joshua-jatto.github.io/',

    // },
];

//initialize dynamic loading of data to ui
projectsData.length > 0 ?
    projectsData.forEach(item => {
        projectsContainer.innerHTML += `<a href=${item.link} target="_blank" class="project-card">
    <div class="background" style="background-image:${item.imageSrc}">
      <div class="project-name">${item.title}</div>
      <div class="project-description">
      ${item.description}
      </div>
    </div>
  </a>`

    })
    : null

