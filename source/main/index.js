const serverHTTP = require('./config/http')

const port = process.env.PORT || 8000

serverHTTP.listen(port, async () => {
	console.log(`Mode: ${process.env.NODE_ENV || 'development'}`)
	console.log(`Server listens: ${port}`)
	console.log('====================================')
	console.log('===========SERVIDOR ATIVO===========')
	console.log('====================================')
})
