const express = require('express')
const app = express()
const port = process.env.PORT || 8081

function getRandomQuote() {
  const quotesList = [
    'Logic will get you from A to B. Imagination will take you everywhere.',
    `There are 10 kinds of people. Those who know binary and those who don't.`,
    `There are two ways of constructing a software design. One way is to make
     it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.`,
    `It's not that I'm so smart, it's just that I stay with problems longer.`,
    `It is pitch dark. You are likely to be eaten by a grue.`
  ]
  min = Math.ceil(1);
  max = Math.floor(quotesList.length - 1);
  
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
  return quotesList[randomNumber];
}

app.get('/random-quote', (req, res) => {
  const generatedQuote = getRandomQuote();
  console.log(`Called getRandomQuote endpoint: `, generatedQuote);
  res.json({'quote': generatedQuote});
});

app.use('/', express.static(__dirname + '/frontend'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})