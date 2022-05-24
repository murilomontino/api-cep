/* eslint-disable no-unused-vars */
const { NextFunction, Request, Response } = require('express')

const ControllerClass = require('../../adapters/port/controller')

const ExpressNextRouteAdapter = require('../adapter/express-adapter-next')

const ValidadeCEPUseCase = require('../../domain/use-cases/validate/validate-cep/validate-cep-use-case')

const MiddlewareValidateCEP = () => {
	/**
	 * @param {Request} req - Request object
	 * @param {Response} res - Response object
	 * @param {NextFunction} next - Next function
	 */
	return (req, res, next) => {
		const ValidadeCEP = new ValidadeCEPUseCase()
		const Controller = new ControllerClass(ValidadeCEP)

		return ExpressNextRouteAdapter(Controller)(req, res, next)
	}
}

module.exports = MiddlewareValidateCEP
