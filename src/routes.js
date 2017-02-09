import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: "/",
			component: Login,
			meta: {
				forVisitors: true
			}
		},
		{
			path: "/register",
			component: Register,
			meta: {
				forVisitors: true
			}
		},
		{
			path: "/home",
			component: Home,
			meta: {
				forAuth: true
			}
		}
	]
})

export default router