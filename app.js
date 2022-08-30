const http = require('http')
const handleRequest = require('./route.js')

const serverCreate = http.createServer(handleRequest)
serverCreate.listen(3000)
