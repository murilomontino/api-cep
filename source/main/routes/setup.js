/* eslint-disable no-unused-vars */
const { Express } = require('express')

const CEPRoutes = require('../routes/cep-routes')
const AuthRoutes = require('../routes/auth-routes')

/**
 * @param {Express} Application
 */
function setup(Application) {
	Application.use(CEPRoutes)
	Application.use(AuthRoutes)
}

module.exports = setup
