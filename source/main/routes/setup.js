/* eslint-disable no-unused-vars */
const { Express } = require('express')

const CEPRoutes = require('../routes/cep-routes')

/**
 * @param {Express} Application
 */
function setup(Application) {
	Application.use(CEPRoutes)
}

module.exports = setup
