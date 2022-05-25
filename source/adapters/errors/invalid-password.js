class InvalidPassword extends Error {
	constructor() {
		super('Senha digitada incorretamente!')
		this.name = 'InvalidPassword'
	}
}

module.exports = InvalidPassword
