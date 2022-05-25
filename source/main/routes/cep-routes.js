const { Router } = require('express')

const makeGetterCEPComposer = require('../composers/ceps-composers/make-getter-cep-composer')
const expressRouteAdapter = require('../adapter/express-adapter')

const middlewareEnsureAuthenticated = require('../middlewares/middleware-ensure-authenticated')
const middlewareCache = require('../middlewares/middleware-getter-cache-cep')
const middlewareValidadeCEP = require('../middlewares/middleware-validate-cep')

const CEP = Router()

const PathCEPs = {
	CEP: '/cep*',
}

CEP.post(
	PathCEPs.CEP,
	middlewareEnsureAuthenticated(),
	middlewareCache(),
	middlewareValidadeCEP(),
	expressRouteAdapter(makeGetterCEPComposer())
)

module.exports = CEP
