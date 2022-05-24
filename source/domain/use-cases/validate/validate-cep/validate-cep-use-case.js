const InvalidCEP = require('../../../../adapters/errors/invalid-cep')
const Either = require('../../../../shared/either')

class ValidateCEPUseCase {
	constructor() {}

	/**
	 * @param {string} cep
	 * @return {Either<Error, Object>}
	 */
	async execute({ cep }) {
		const regex = /^[0-9]{5}-[0-9]{3}$/
		if (!regex.test(cep)) {
			return Either.Right(new InvalidCEP())
		}

		return Either.Left({
			message: 'CEP válido',
		})
	}
}

module.exports = ValidateCEPUseCase
