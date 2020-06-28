const express = require('express')
const app = express()

app.use(function(req, res, next) {
    console.log(req.url);
    next();
})

app.get('/', function (req, res) {
  res.send('Hello from the web server side...')
})

app.use(express.static('public'))
 
app.listen(3000)