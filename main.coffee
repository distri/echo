{PORT} = process.env

PORT ?= 5000

express = require('express')
app = express()

app.get '/', (req, res) ->
  res.send('hello world')

app.listen(PORT)
