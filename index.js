const PORT = 8000
const axios = require("axios")
const cheerio = require("cheerio")
const { response } = require("express")
const express = require("express")

const app = express()
const url = "https://www.zara.com/us/en/woman-outerwear-padded-l1195.html?v1=1988915"
const nyTimesURL = "https://www.nytimes.com/section/technology"
const women = "https://www.harpersbazaar.com/culture/features/a4056/empowering-female-quotes/"

// axios(url)
// .then(response =>{
//     const html = response.data
//     const $ = cheerio.load(html)
//     // console.log(html)
//     const list = $('.product-grid-product')
// //   $('li[class="product-grid-product"]', html).each(()=> {
//     $('.price-future-promotion', html).each(()=>{
//         const item = $(this).text()
//         console.log(item)

//     })
// })
    
axios(women)
.then(response =>{
    const html = response.data
    const $ = cheerio.load(html)
    // console.log(html)
    const list = []
//   $('li[class="product-grid-product"]', html).each(()=> {
    $('.body-text', html).each(()=>{
        const item = $(this).text()
        const url  = $(this).find("a").attr('href')
        console.log(item)
        list.push({
            item
        })

    })
})



    // .each(()=> {
    //     $(this).find('div > div > a')
    // product-grid-product-info__tag
    // $(this).find('div > div > a')
    //   const item = $(this).text()
//   })

app.get('/', function (req, res) {
    res.send('Hello World Welcome to the API made by Arianna Choza')
  })
  
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
