/* eslint-disable no-unused-vars */
const { NextFunction, Request, Response } = require('express')

const Controller = require('../../adapters/port/controller')

/**
 * @param {Controller} controller - Controller object
 */

const expressRouteAdapter = (controller) => {
	/**
	 * @param {Request} req - Request object
	 * @param {Response} res - Response object
	 * @param {NextFunction} next - Next function
	 */
	return async (req, res) => {
		const params = { ...req.params, ...req.query, ...req.body }

		const httpResponse = await controller.handle(params)

		return res.status(httpResponse.statusCode).json(httpResponse.body).end()
	}
}

module.exports = expressRouteAdapter
