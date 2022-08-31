const route = require('express')
const path = require('path') // another core module of nodeJs
const rootDir = require('../utils/path')

const router = route.Router()

router.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'))
})

module.exports = router
