const Controller = require('../../adapters/port/controller')
const GetterCEPUseCase = require('../../domain/use-cases/getter-cep/getter-cep-use-case')

const makeGetterCEPComposer = () => {
	const useCase = new Controller(new GetterCEPUseCase())

	return useCase
}

module.exports = makeGetterCEPComposer
