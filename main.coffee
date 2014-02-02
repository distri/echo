{PORT} = process.env

PORT ?= 5000

express = require('express')
app = express()

app.get '/', (req, res) ->
  res.send req.query

app.get '/yolo', (req, res) ->
  res.send "heyy"

app.listen(PORT)
