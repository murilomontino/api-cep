/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'

import { Controller } from '../../adapters/port/controller'

/**
 * @param {Controller} controller - Controller object
 */

export const ExpressRouteAdapter = (controller) => {
	/**
	 * @param {Request} req - Request object
	 * @param {Response} res - Response object
	 * @param {NextFunction} next - Next function
	 */
	return async (req, res) => {
		const params = { ...req.params, ...req.query }

		const httpResponse = await controller.handle(params)

		return res.status(httpResponse.statusCode).json(httpResponse.body)
	}
}
