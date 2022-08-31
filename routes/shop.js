const route = require('express')
const path = require('path') // another core module of nodeJs
const rootDir = require('../utils/path')

const router = route.Router()

router.get('/', (req, res, next) => {
  console.log('In the middleware 1')
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  // This automatically works on all types of os because linux and windows both have
  // different paths eg / for linux and \ for windows url.
})

module.exports = router
