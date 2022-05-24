/**
 *
 * @typedef {object} data
 * @property {string}  data.cep
 * @property {string}  data.logradouro
 * @property {string}  data.bairro
 * @property {string}  data.localidade
 * @property {string}  data.uf
 * @property {string}  data.ibge
 * @property {string}  data.gia
 * @property {string}  data.ddd
 * @property {string}  data.siafi
 */

/**
 * @param {Error} error - Error object
 * @return {{ statusCode: 400, body: string }}
 */
export const badRequest = (error) => ({
	statusCode: 400,
	body: error.message,
})

/**
 * @param {Error} error - Error object
 * @return {{ statusCode: 404, body: string }}
 */
export const notFound = (error) => ({
	statusCode: 404,
	body: error.message,
})

/**
 * @param {...data} data - Data object
 * @return {{ statusCode: number, body: data }} - Response object
 */
export const ok = (data) => ({
	statusCode: 200,
	body: data,
})

/**
 * @param {Error} error - Error object
 * @return {{ statusCode: 500, body: string }}
 */
export const serverError = (error) => ({
	statusCode: 500,
	body: error.message,
})
