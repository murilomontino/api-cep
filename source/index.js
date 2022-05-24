import axios from 'axios'

axios.get('https://api.github.com/users/diego3g').then(function (response) {
	console.log(response)
})
