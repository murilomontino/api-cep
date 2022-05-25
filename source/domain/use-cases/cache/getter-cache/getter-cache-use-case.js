const NodeCache = require('../../../../infrastructure/cache/node-cache')
const Either = require('../../../../shared/either')

class GetterCache {
	/**
	 *
	 * @param {string} key Chave do cache
	 * @returns {Promise<Either.typeLeft | Either.typeRight>}
	 */
	static async execute(key) {
		const keyFormatted = key.replace(/"[^0-9a-zA-Z]/g, '')

		const cache = await NodeCache.get(keyFormatted)

		if (cache) {
			return Either.Left({ inCache: true, ...cache })
		}

		return Either.Right(null)
	}
}

module.exports = GetterCache
