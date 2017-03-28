<template>
	<div class="logIn">
		<form @submit.prevent="loginUser">
			<!--  Email-->
			<input type="email" name="email" placeholder="Email/Username" v-model="login.email" v-validate="'required|email'" class="logIn__username" @keydown="clearField">
			<span v-show="errors.has('email')" class="help is-danger">
				{{ errors.first('email') }}
			</span>
			<br>
			<!--  Password-->
			<input type="password" name="password" placeholder="Password" v-model="login.password" v-validate="'required|min:8|verify_password'" class="logIn__password" @keydown="clearField">
			<span v-show="errors.has('password')" class="help is-danger">
				{{ errors.first('password') }}
			</span>
			<span class="help is-danger" v-text="login.errors"></span>
			<!--  Submit-->
			<button type="submit" class="logIn__button">Log in</button>
			<span class="forgotPass">Forget Password?</span>
			<router-link to="register"><span>Register</span></router-link>
		</form>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				login: {
					email:    '',
					password: '',
					errors:   ''
				}
			}
		},
		methods: {
			loginUser() {
				if (!this.errors.any() && this.$validator.validateAll()) {
					var dataUser = {
						email: this.login.email,
						password: this.login.password
					}
					this.$http.post("http://larapi.com/api/auth/login", dataUser)
					.then(response => { //if success
				    	this.$auth.setToken(response.body.token)
				    	this.$router.push("/home")

				  	}).catch(function (data) { //if there is an error
						this.login.errors = 'Invalid email or password'; //write into errors field
					})
				}
			},
			clearField() { //reset errors field
				this.login.errors = "";
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
		margin-bottom: 1rem;
		text-align: left;
		color: rgb(149,152,154);
	}
	.is-danger {
		font-size: 1em;
		color: red;
	}
</style>
