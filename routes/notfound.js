const route = require('express')
const path = require('path') // another core module of nodeJs

const router = route.Router()

router.use('/', (req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '../', 'views', 'page-not-found.html'))
})

module.exports = router
