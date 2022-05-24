const NodeCache = require('../../../../infrastructure/cache/node-cache')

const Either = require('../../../../shared/either')

class SetterCache {
	static async execute(key, value) {
		const keyFormatted = key.replace(/"[^0-9a-zA-Z]/g, '')

		try {
			NodeCache.set(keyFormatted, value)
			return Either.Left(value)
		} catch (error) {
			return Either.Right(error)
		}
	}
}

module.exports = SetterCache