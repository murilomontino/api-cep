const InvalidCEP = require('../../../../adapters/errors/invalid-cep')
const Either = require('../../../../shared/either')

class ValidateCEPUseCase {
	/**
	 * @param {{
	 * 	cep: string
	 * }} params
	 * @return {Promise<Either.typeLeft | Either.typeRight>}
	 */
	async execute({ cep }) {
		const regexOne = /^[0-9]{8}$/
		const regexTwo = /^[0-9]{5}-[0-9]{3}$/

		if (regexOne.test(cep) || regexTwo.test(cep)) {
			return Either.Left({
				message: 'CEP Válido',
			})
		}

		return Either.Right(new InvalidCEP())
	}
}

module.exports = ValidateCEPUseCase
