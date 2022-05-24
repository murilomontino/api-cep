class InvalidCEP extends Error {
	constructor() {
		super('CEP inválido')
		this.name = 'InvalidCEP'
	}
}

module.exports = InvalidCEP
