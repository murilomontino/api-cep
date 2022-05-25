class NonExistentUser extends Error {
	constructor() {
		super('Usuário não existe!')
		this.name = 'NonExistentUser'
	}
}

module.exports = NonExistentUser
