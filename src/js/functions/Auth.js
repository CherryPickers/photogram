export default function(Vue) {
	Vue.auth = {
		// set token

		setToken(token) {
			localStorage.setItem('token', token)
		},
		// get token

		getToken() {
			var token = localStorage.getItem('token')
			if(! token)
				return null
			else {
				return token;
			}
		},
		// destroy token

		destroyToken() {
			localStorage.removeItem('token')
		},
		// isAuthenticated

		isAuthenticated()  {
			if(this.getToken())
				return true
			else
				return false
		},
		getAuthHeader() { return { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
	}
	Object.defineProperties(Vue.prototype,{
		$auth: {
			get: () => {
				return Vue.auth
			}
		}
	})
}
