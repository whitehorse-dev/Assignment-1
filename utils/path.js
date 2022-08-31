const path = require('path')

module.exports = path.dirname(process.mainModule.filename)

// This helps in simplifying the code to get the path. Instead of __dir we use rootDir after making an object of this path.
