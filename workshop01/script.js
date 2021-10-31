// call web service
async function getRandomQuote() {
    // put quote into html element
    let response = await fetch('http://localhost:3000/random-quote');
    let data = await response.json();
    return data;
};

getRandomQuote().then(response => {
    // put quote into html element
    const randomQuoteElement = document.getElementById('random-quote');
    randomQuoteElement.innerHTML = response.quote;
})
