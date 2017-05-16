var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('Hit!')
  res.send('<html><head><title>Hi, this is the title</title></head><body>Hello</body></html>')
})

app.listen(3000, function () {
  console.log('Started app.')
})
