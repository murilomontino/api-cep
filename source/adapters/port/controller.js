/* eslint-disable no-unused-vars */
import { badRequest, ok, notFound, serverError } from '../helpers/http-helper'

export class Controller {
	constructor(useCase) {
		this.UseCase = useCase
	}

	async handle(httpRequest) {
		try {
			const responseOrErr = await this.UseCase.execute(
				httpRequest.body,
				httpRequest.params ?? {}
			)

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

export default Controller
