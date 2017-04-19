<template>
	<header class="header">
		<div class="header__contentHolder">
			<h1 class="logo">Photo<span>gram</span></h1>
			<nav class="mainNav mainNav--left">
				<router-link to="home" class="mainNav__link"><span>Home</span></router-link>|
				<router-link to="profile" class="mainNav__link"><span>Profile</span></router-link>|
				<button type="button" name="button" @click="logOut" class="mainNav__link">Sign out</button>
			</nav>
			<nav class="mainNav mainNav--right">
				<a href="#" class="mainNav__link">search</a>
				<a href="#" class="mainNav__link">srb</a>
			</nav>
		</div>
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
