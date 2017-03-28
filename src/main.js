import Vue from 'vue'
import App from './js/App.vue'

import Router from './js/helpers/routes.js'

import VueResource from 'vue-resource'
import VeeValidate, { Validator } from 'vee-validate';

import Auth from './js/auth/Auth.js'

import Header from './js/components/Header.vue'

Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate);

Vue.component('app-header', Header);

Router.beforeEach(
	(to, from, next) => {
		if(to.matched.some(record => record.meta.forVisitors)){
			if(Vue.auth.isAuthenticated()) {
				next({
					path: '/home'
				})
			} else next()
		}
		else if(to.matched.some(record => record.meta.forAuth)){
			if(! Vue.auth.isAuthenticated()) {
				next({
					path: '/'
				})
			} else next()
		}
		else next()
	}
)

//client form validation
Validator.extend('verify_password', {
	getMessage: field => `minimum 8 characters at least 1 number, 1 special character, 1 uppercase letter`,
	validate: value => {
		var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		return strongRegex.test(value);
	}
});

new Vue({
	el: '#app',
	render: h => h(App),
	router: Router
})
