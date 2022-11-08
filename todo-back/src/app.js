const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello El Mahfoud, i hope ci works')
})

app.listen(5000)
