const { Router } = require('express')

const expressRouteAdapter = require('../adapter/express-adapter')

const makeAuthenticateComposer = require('../composers/auth-composers/make-authenticate-composers')

const Auth = Router()

const PathAuth = {
	Authenticate: '/auth',
}

Auth.post(
	PathAuth.Authenticate,
	expressRouteAdapter(makeAuthenticateComposer())
)

module.exports = Auth
