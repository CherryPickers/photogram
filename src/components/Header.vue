<template>
	<header class="header">
		<h1 class="logo">Photogram.</h1>
		<button type="button" name="button" @click="logOut">Log out</button>
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

<style>
	.header {
		padding: 1rem;
		background-color: rgb(245,245,245);
		text-align: center;
	}
	.logo {
	  display: inline-block;
	  color: rgb(149,152,154);
	  font-weight: bold;
	}
	.header button {
		margin-top: 1rem;

		background: none;
		outline: 0;
		border: 0;

		float: right;

		font-size: 0.8rem;
		text-transform: uppercase;
		text-decoration: underline;
		color: #000;
	}
	.header button:hover {
		color: rgb(149,152,154);
	}
</style>
