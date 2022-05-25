/* eslint-disable no-unused-vars */
const {
	badRequest,
	ok,
	notFound,
	serverError,
} = require('../helpers/http-helper')

class Controller {
	constructor(useCase) {
		this.UseCase = useCase
	}

	async handle(httpRequest) {
		try {
			const responseOrErr = await this.UseCase.execute(httpRequest)
			if (responseOrErr.isRight()) {
				return badRequest(responseOrErr.value)
			}

			return ok(responseOrErr.value)
		} catch (error) {
			return serverError(error)
		}
	}
}

module.exports = Controller
