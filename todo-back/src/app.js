const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hey El Mahfoud, i hope ci works!')
})

app.listen(5000)
