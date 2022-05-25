const Either = require('../../../shared/either')

const { sign } = require('jsonwebtoken')

class GenerateTokenUseCase {
	/**
	 * @param {{
	 * username: string
	 * id: string
	 * name: string
	 * }} params
	 * @return {Promise<Either.typeLeft | Either.typeRight>}
	 */
	async execute(params) {
		try {
			const token = sign(params, process.env.SECRET_KEY, {
				subject: params.id,
				expiresIn: '1h',
			})
			return Either.Left(token)
		} catch (error) {
			return Either.Right(error)
		}
	}
}

module.exports = GenerateTokenUseCase
