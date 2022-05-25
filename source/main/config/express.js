require('../../infrastructure/cache/node-cache')

const setup = require('../routes/setup')
const express = require('express')

const Application = express()

Application.use(express.json())

setup(Application)

module.exports = Application
