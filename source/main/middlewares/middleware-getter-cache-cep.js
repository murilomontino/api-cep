/* eslint-disable no-unused-vars */
const { NextFunction, Request, Response } = require('express')
const GetterCache = require('../../domain/use-cases/cache/getter-cache/getter-cache-use-case')

/**
 * @param {Controller} controller - Controller object
 */

const MiddlewareGetterCacheCEP = () => {
	/**
	 * @param {Request} req - Request object
	 * @param {Response} res - Response object
	 * @param {NextFunction} next - Next function
	 */
	return async (req, res, next) => {
		const params = { ...req.params, ...req.query, ...req.body }
		const cep = params.cep || ''

		const value = await GetterCache.execute(cep)

		if (value.isRight()) return next()

		return res.json(value).end()
	}
}

module.exports = MiddlewareGetterCacheCEP
