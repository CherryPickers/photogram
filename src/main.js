//importing files
import Vue from 'vue'
import App from './js/App.vue'
import Header from './js/components/Header.vue'
import Feed from './js/components/Feed.vue'
import Static from './js/components/Static.vue'
import Auth from './js/functions/Auth.js'
import Router from './js/config/routes.js'
//defining components
Vue.component('app-header', Header);
Vue.component('feed', Feed);
//importing plugins
import VueResource from 'vue-resource'
import VeeValidate, { Validator } from 'vee-validate';
//using plugins
Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate);
//defining Router
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
//vue init
new Vue({
	el: '#app',
	render: h => h(App),
	router: Router
})
