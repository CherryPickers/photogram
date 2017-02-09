<template>
	<div class="logIn">
		<input class="logIn__username" type="text" name="email" v-model="email" placeholder="Email/Username">
		<input class="logIn__password" type="password" name="password" v-model="password" placeholder="Password">
		<button @click="loginUser" class="logIn__button">Log in</button>
		<span class="forgotPass">Forgot Password?</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			loginUser() {
				var dataUser = {
					email: this.email,
					password: this.password
				}
				this.$http.post("http://lar.com/api/api/v1/auth/login", dataUser)

				.then(response => {
			    	this.$auth.setToken(response.body.token)
			    	this.$router.push("/home")
			  	})

			}
		}
	}
</script>

<style>
.logIn {
	width: 30%;
	margin: 2rem auto;
}

.logIn__username, .logIn__password {
	display: block;
	width: 100%;
	margin: 2rem 0;
	font-size: 1.8rem;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	border: none;
	border-bottom: 1px solid rgb(149,152,154);
}

.logIn__button {
	width: 100%;
	margin-bottom: 2rem;
	padding: 0.5rem 0;
	font-size: 1.8rem;
	text-transform: uppercase;
	color: rgb(149,152,154);
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	background-color: white;
	border: 1px solid rgb(149,152,154);
	cursor: pointer;
}
.forgotPass {
	display: block;
	text-align: left;
	color: rgb(149,152,154);
}
	
</style>