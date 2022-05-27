const NodeCache = require('../../../../infrastructure/cache/node-cache')

const Either = require('../../../../shared/either')

class SetterCache {
	/**
	 * @param {string} key Chave do cache
	 * @param {object} value Valor do cache
	 * @returns {Promise<Either.typeLeft | Either.typeRight>}
	 */
	static async execute(key, value) {
		// remover caracteres especiais
		const regex = /[^0-9a-zA-Z]/g
		const keyFormatted = key.replace(regex, '')

		try {
			NodeCache.set(keyFormatted, value, 300)
			return Either.Left(value)
		} catch (error) {
			return Either.Right(error)
		}
	}
}

module.exports = SetterCache
