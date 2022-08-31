const route = require('express')

const router = route.Router()

router.get('/', (req, res, next) => {
  console.log('In the middleware 1')
  res.send('<h1>Hello From Express js</h1>')
})

module.exports = router
