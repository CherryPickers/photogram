import Vue from 'vue'
import App from './App.vue'

import Router from './routes.js'

import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth.js'

import Header from './components/Header.vue'

Vue.use(VueResource)
Vue.use(Auth)

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

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})


