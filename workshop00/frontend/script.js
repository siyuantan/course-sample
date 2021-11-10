const hostnameAndPort = window.location.href

// call web service
async function getRandomQuote() {
    // put quote into html element
    let response = await fetch(`${hostnameAndPort}random-quote`);
    let data = await response.json();
    return data;
};

getRandomQuote().then(response => {
    // put quote into html element
    const randomQuoteElement = document.getElementById('random-quote');
    randomQuoteElement.innerHTML = response.quote;
})
