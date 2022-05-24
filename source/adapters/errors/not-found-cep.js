class NotFoundCEP extends Error {
	constructor() {
		super('CEP não encontrado')
		this.name = 'NotFoundCEP'
	}
}

module.exports = NotFoundCEP
