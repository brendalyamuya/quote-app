const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    
}

async function getQuote(){

    const apiurl= 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiurl);
        apiQuotes = await response.json();
        // console.log(apiQuotes[12]);
        newQuote();

    }catch (error){
        // catch errors here
    } 

}

getQuote();