const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // if author is unknown
    if(!quote.author){
        authorText.textContent = 'Unknown';
        console.log('unknown');
    }else{
        authorText.textContent= quote.author;
    }


    
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

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    // ? means query parameters
    window.open(twitterUrl,'_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

getQuote();