const axios = require('axios')
const Either = require('../../../shared/either')
const NotFoundError = require('../../../adapters/errors/not-found-cep')
const SetterCache = require('../cache/setter-cache/setter-cache-use-case')
const URL = 'https://viacep.com.br/ws/'

class GetterCEPUseCase {
	constructor() {}

	async execute({ cep }) {
		const cepFormatted = cep.replace(/[^0-9]/g, '')

		return axios
			.get(URL + cepFormatted + '/json/')
			.then(({ data }) => {
				if (data.erro) {
					return Either.Right(new NotFoundError())
				}
				SetterCache.set(cep, data)
				return Either.Left(data)
			})
			.catch((error) => Either.Right(error))
	}
}

module.exports = GetterCEPUseCase
