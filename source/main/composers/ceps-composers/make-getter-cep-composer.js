const Controller = require('../../../adapters/port/controller')
const GetterCEPUseCase = require('../../../domain/use-cases/getter-cep/getter-cep-use-case')

/**
 * @returns {Controller}
 */
const makeGetterCEPComposer = () => {
	return new Controller(new GetterCEPUseCase())
}

module.exports = makeGetterCEPComposer
