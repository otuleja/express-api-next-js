const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
const port = process.env.PORT || 443;
app.listen(port)