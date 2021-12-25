const PORT = 8000
const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World Welcome to the API made by Arianna Choza')
  })
  
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
