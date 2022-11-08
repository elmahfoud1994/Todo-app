const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('He El Mahfoud Bouatim, i hope ci works!')
})

app.listen(5000)
