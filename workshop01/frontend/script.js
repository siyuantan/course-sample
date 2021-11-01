// call web service
async function getRandomQuote() {
    // put quote into html element
    let response = await fetch('http://randomquotebackend-env.eba-5nhd7nd8.ap-southeast-1.elasticbeanstalk.com/random-quote');
    let data = await response.json();
    return data;
};

getRandomQuote().then(response => {
    // put quote into html element
    const randomQuoteElement = document.getElementById('random-quote');
    randomQuoteElement.innerHTML = response.quote;
})
