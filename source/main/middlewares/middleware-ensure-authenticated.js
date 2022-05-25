/* eslint-disable no-unused-vars */
const { NextFunction, Request, Response } = require('express')
const { verify } = require('jsonwebtoken')

const MiddlewareValidateCEP = () => {
	/**
	 * @param {Request} req - Request object
	 * @param {Response} res - Response object
	 * @param {NextFunction} next - Next function
	 */
	return async (req, res, next) => {
		const authorization = req.headers.authorization || 'sem token'

		const [_, token] = authorization.split(' ')

		try {
			verify(token, process.env.SECRET_KEY)
			return next()
		} catch (error) {
			return res.status(401).json({
				error: 'Você não tem permissão para acessar esse recurso',
			})
		}
	}
}

module.exports = MiddlewareValidateCEP
