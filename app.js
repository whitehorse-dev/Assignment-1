const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ entended: false }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

// Handling the 404 error pages
app.use('/', (req, res, next) => {
  res.status(404).send('<h1> Sorry!! This page was not found!! </h1>')
})

app.listen(3000)
