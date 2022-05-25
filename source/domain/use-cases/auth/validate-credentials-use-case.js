const { compareSync } = require('bcryptjs')

const { users } = require('../../../../database/users.json')

const Either = require('../../../shared/either')

const NonExistentUserError = require('../../../adapters/errors/non-existent-user')
const InvalidPasswordError = require('../../../adapters/errors/invalid-password')

class ValidadeCredentialsUseCase {
	/**
	 * @param {{
	 *  username: string
	 *  password: string
	 * }} params
	 *  @return {Promise<Either.typeLeft | Either.typeRight>}
	 */
	async execute({ username, password }) {
		const user = users.find((user) => user.username === username)

		if (!user) {
			return Either.Right(new NonExistentUserError())
		}

		if (!compareSync(password, user.password)) {
			return Either.Right(new InvalidPasswordError())
		}

		return Either.Left(user)
	}
}

module.exports = ValidadeCredentialsUseCase
