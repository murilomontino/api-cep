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
				switch (responseOrErr.value.statusCode) {
					case 404:
						return notFound(responseOrErr.value)
					default:
						return badRequest(responseOrErr.value)
				}
			}

			return ok(responseOrErr.value)
		} catch (error) {
			return serverError(error)
		}
	}
}

module.exports = Controller
