const express = require('express'),
  bodyParser = require('body-parser'),
  axios = require('axios'),
  app = express()

app.use(bodyParser.json())
app.get('/', (req, res) => res.json({message: 'hello world!'}))

app.get('/', function(req, res) { return res.json({message: 'hello world'}) })

app.get('/api/trivia', (req, res) => {
  axios.get('https://opentdb.com/api.php?amount=10')
    .then(trivia => trivia.data.results)
    .then(triviaData => res.json(triviaData))
    .catch(err => console.log(err))
})


app.get('/api/trivia/cats', (req, res) => {
})

app.listen(3000)
