import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/Home.vue'
import Login from './../components/authentication/Login.vue'
import Register from './../components/authentication/Register.vue'
import Profile from './../components/Profile.vue'
import Feed from './../components/Feed.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
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
		},
		{
			path: "/profile",
			component: Profile,
			meta: {
				forAuth: true
			}
		},
		{
			path: "/feed",
			component: Feed,
			meta: {
				forAuth: true
			}
		}
	],
	linkActiveClass: 'active'
})

export default router
