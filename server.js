const express = require('express'),
  bodyParser = require('body-parser'),
  app = express()

app.use(bodyParser.json())
app.get('/', (req, res) => res.json({message: 'hello world!'}))

app.get('/', function(req, res) { return res.json({message: 'hello world'}) })

app.post('/api/gamer', (req, res) => {
  console.log(req.body)
  const gamerName = req.body.gamerName
  if (gamerName === 'Mario') {
    res.json({bestMatch: 'Luigi'})
  } else {
    res.json({bestMatch: 'buddy'})
  }
})

app.listen(3000)
