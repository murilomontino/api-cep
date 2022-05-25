const Controller = require('../../../adapters/port/controller')
const AuthenticateUseCase = require('../../../domain/use-cases/auth/authenticate-use-case')

/**
 * @returns {Controller}
 */
const makeGetterCEPComposer = () => {
	return new Controller(new AuthenticateUseCase())
}

module.exports = makeGetterCEPComposer
