const express = require('express')
const app = express()

require('dotenv').config()
require('./server')(app)
require('./routes')(app)

module.exports = app