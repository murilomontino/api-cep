const http = require('http')

const Application = require('./express')

// Create HTTP server.
const serverHTTP = (() => {
	const server = http.createServer(Application)

	return server
})()

module.exports = serverHTTP
