//initailize mode with toggle button

//helper functions
function _(type){return document.createElement(type)} //call function with html element to create
function __(type){return document.querySelector(type)} //call function with html element to get/fetch


const toggleMode = __('.toggle')
const body = __('body')
const quotesBox = __('.quotes')
const addQuoteBtn = __('.addbtn')
const getQuote = __('.get-quote')
const addQnN = __('.add-quote-and-name')
const nav = __('nav')



toggleMode.addEventListener('click',()=>{
    toggleMode.classList.toggle('active')
    
    body.classList.toggle('active')
    

    
})


let quoteMachine =[ {
    quote: "God is always present, He's here now.",
    quoter: "MQ. Idibia"
},

{
    quote: "Only God knows how best to help a man",
    quoter: "Shagba Mone"
},
{
    quote: "How be it, It shall come to pass",
    quoter: "Gloria Enamino"
},
];
 
let magicNum =  Math.floor(Math.random() * quoteMachine.length);

for(let i = magicNum; i <= quoteMachine.length;i++){
   quotesBox.innerText = quoteMachine[i].quote+"\n~"+quoteMachine[i].quoter
   break;
};

addQuoteBtn.addEventListener('click',()=>{
    addQuoteBtn.style.display = 'none';
    getQuote.style.display = 'flex';  
})
 
//add quote input validation //todo1
addQnN.addEventListener('click', (e)=>{
   
    function Quote(){
        return{
            quote:  __('#quote').value,
            quoter: __('#author').value
        }
    }
    
    let newquote = Quote()
    window.localStorage.setItem('qoutesUpdate',JSON.stringify(newquote));

    let myQuote = window.localStorage.getItem('qoutesUpdate');
                                                                                                                                     
    getQuote.style.display = 'none'
    quoteMachine.push(  JSON.parse(myQuote));
    quotesBox.innerText =  JSON.parse(myQuote).quote +"\n~"+  JSON.parse(myQuote).quoter;
    
        e.preventDefault()
})
// todo fix localstorage to display items on qutoes