const InvalidCEP = require('../../../../adapters/errors/invalid-cep')
const Either = require('../../../../shared/either')

class ValidateCEPUseCase {
	constructor() {}

	/**
	 * @param {{
	 * 	cep: string
	 * }} params
	 * @return {Promise<Either.typeLeft | Either.typeRight>}
	 */
	async execute({ cep }) {
		const cepFormatted = cep.replace(/[^0-9]/g, '')
		const regex = /^[0-9]{8}$/

		if (!regex.test(cepFormatted)) {
			return Either.Right(new InvalidCEP())
		}

		return Either.Left({
			message: 'CEP Válido',
		})
	}
}

module.exports = ValidateCEPUseCase
