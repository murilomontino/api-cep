const GetterCacheUseCase = require('../domain/use-cases/cache/getter-cache/getter-cache-use-case')
const SetterCacheUseCase = require('../domain/use-cases/cache/setter-cache/setter-cache-use-case')

const data = {
	cep: '01001-000',
	logradouro: 'Rua Teste',
	bairro: 'Bairro Teste',
	localidade: 'São Paulo',
	uf: 'SP',
}

async function ShouldSetCache() {
	const cep = '01001-000'
	const response = await SetterCacheUseCase.execute(cep, data)
	return response.isLeft()
}

async function ShouldNotFoundCache() {
	const cep = '01001-000'
	const result = await GetterCacheUseCase.execute(cep)
	return result.isRight()
}

async function ShouldFoundCache() {
	const cep = '01001-000'
	await SetterCacheUseCase.execute(cep, data)
	const result = await GetterCacheUseCase.execute(cep)
	return result.isLeft()
}

async function main() {
	const responses = {
		ShouldNotFoundCache: await ShouldNotFoundCache(),
		ShouldFoundCache: await ShouldFoundCache(),
		ShouldSetCache: await ShouldSetCache(),
	}

	console.log(responses)
}

module.exports = main
