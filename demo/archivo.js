const path = require('path')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'pagina.html'))
})
 
app.listen(3000)