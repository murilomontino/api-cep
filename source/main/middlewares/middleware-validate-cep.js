/* eslint-disable no-unused-vars */
const { NextFunction, Request, Response } = require('express')
const InvalidCEP = require('../../adapters/errors/invalid-cep')
const { badRequest } = require('../../adapters/helpers/http-helper')

const ValidadeCEPUseCase = require('../../domain/use-cases/validate/validate-cep/validate-cep-use-case')

const MiddlewareValidateCEP = () => {
	/**
	 * @param {Request} req - Request object
	 * @param {Response} res - Response object
	 * @param {NextFunction} next - Next function
	 */
	return async (req, res, next) => {
		const params = { ...req.params, ...req.query, ...req.body }

		const cep = params.cep || ''

		const useCase = new ValidadeCEPUseCase()

		const validadeCEP = await useCase.execute({ cep })

		if (validadeCEP.isLeft()) return next()

		return res.status(400).json(badRequest(new InvalidCEP())).end()
	}
}

module.exports = MiddlewareValidateCEP
