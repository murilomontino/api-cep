const Either = require('../../../shared/either')
const ValidadeCredentialsUseCase = require('./validate-credentials-use-case')
const GenerateTokenUseCase = require('./generate-token-use-case')

class AuthenticateUseCase {
	constructor() {
		this.validateCredentialsUseCase = new ValidadeCredentialsUseCase()
		this.generateTokenUseCase = new GenerateTokenUseCase()
	}

	/**
	 * @param {{
	 *  username: string
	 *  password: string
	 * }} params
	 *  @return {Either.typeLeft | Either.typeRight}
	 */
	async execute({ username, password }) {
		const credentialsValidOrErr = await this.validateCredentialsUseCase.execute(
			{
				username,
				password,
			}
		)

		if (credentialsValidOrErr.isRight()) {
			return credentialsValidOrErr
		}

		const tokenOrErr = await this.generateTokenUseCase.execute(
			credentialsValidOrErr.value
		)

		if (tokenOrErr.isRight()) {
			return tokenOrErr
		}

		return Either.Left({ token: tokenOrErr.value })
	}
}

module.exports = AuthenticateUseCase
