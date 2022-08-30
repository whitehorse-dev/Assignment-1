const fs = require('fs')

const handleRequest = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Greetings!</title></head>')
    res.write('<body><h1>Welcome to the body</h1></body>')
    res.write(
      '<body><form action="/createUser" method="POST"><label for="fname">First name:</label><br> <input type="text" id="fname" name="fname"><br> <label for="lname">Last name:</label><br> <input type="text" id="lname" name="lname"> <br><button type="submit">Click Me!</button></br></form></body>'
    )
    res.write('</html>')
    return res.end()
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Users List!</title></head>')
    res.write('<body><h1>Random Users List</h1></body>')
    res.write('<body><ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/createUser' && method === 'POST') {
    const requestBody = []
    req.on('data', (chunk) => {
      console.log(`Data entered in the chunk is ${chunk}`)
      requestBody.push(chunk)
    })

    return req.on('end', () => {
      const parsedBody = Buffer.concat(requestBody).toString()
      const message = parsedBody.split('=')[1]
      console.log(message)
      const writeFile = fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302
        res.setHeader('Location', '/users')
        res.writeHead(302, {})
        return res.end()
        // THis is the event driven architecture. ie OnEnd - start filling the message body. Write to file and then error 3 things at queue.
        // 3 Events and output will be driven by the results of earlier functions.
      })
    })
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Hello Saurabh Pandey</title></head>')
  res.write('<body><h1>Hello Saurabh Pandey in Body in the server</h1></body>')
  res.write('</html>')
  res.end()
}

module.exports = handleRequest
