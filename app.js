const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ entended: false }))

app.use('/add-product', (req, res, next) => {
  console.log('In the product middleware 2')
  res.send(
    '<body><form action="/product" method="POST"><label for="fname">First name:</label><br> <input type="text" id="fname" name="fname"><br> <label for="lname">Last name:</label><br> <input type="text" id="lname" name="lname"> <br><button type="submit">Click Me!</button></br></form></body>'
  )
})

app.post('/product', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  console.log('In the middleware 1')
  res.send('<h1>Hello From Express js</h1>')
})
// const handleRequest = require('./route.js')

app.listen(3000)
