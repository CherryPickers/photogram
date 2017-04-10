<template>
	<header class="header">
		<h1 class="logo">Photogram.</h1>
		<nav class="mainNav">
			<router-link to="home" class="mainNav__link"><span>Home</span></router-link>|
			<router-link to="profile" class="mainNav__link"><span>Profile</span></router-link>|
			<button type="button" name="button" @click="logOut" class="mainNav__link">Sign out</button>
		</nav>
 	</header>
</template>

<script>
	export default {
		methods: {
			logOut() {
				this.$auth.destroyToken()
					this.$router.push("/")
			}
		}
	}
</script>
