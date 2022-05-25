const { Router } = require('express')

const makeGetterCEPComposer = require('../composers/make-getter-cep-composer')
const expressRouteAdapter = require('../adapter/express-adapter')
const middlewareCache = require('../middlewares/middleware-getter-cache-cep')

const CEP = Router()

// Objeto que contém todas as rotas de produtos
const PathCEPs = {
	CEP: '/cep*',
}

// Adiciona a rota /add-product para adicionar um produto
CEP.post(
	PathCEPs.CEP,
	middlewareCache(),
	expressRouteAdapter(makeGetterCEPComposer())
)
CEP.get(
	PathCEPs.CEP,
	middlewareCache(),
	expressRouteAdapter(makeGetterCEPComposer())
)

module.exports = CEP
