/* eslint-disable no-unused-vars */
const { NextFunction, Request, Response } = require('express')

const { Controller } = require('../../adapters/port/controller')

const { ExpressNextRouteAdapter } = require('../adapter/express-adapter-next')

/**
 * @param {Controller} controller - Controller object
 */

const MiddlewareValidateCEP = (controller) => {
	/**
	 * @param {Request} req - Request object
	 * @param {Response} res - Response object
	 * @param {NextFunction} next - Next function
	 */
	return ExpressNextRouteAdapter(controller)
}

module.exports = MiddlewareValidateCEP
