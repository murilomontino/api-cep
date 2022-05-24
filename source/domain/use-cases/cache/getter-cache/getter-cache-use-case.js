const NodeCache = require('../../../../infrastructure/cache/node-cache')
const Either = require('../../../../shared/either')

class GetterCache {
	static async execute(key) {
		const keyFormatted = key.replace(/"[^0-9a-zA-Z]/g, '')

		const cache = await NodeCache.get(keyFormatted)

		if (cache) {
			return Either.Left(cache)
		}

		return Either.Right(null)
	}
}

module.exports = GetterCache
