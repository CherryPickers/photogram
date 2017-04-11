<template>
	<div class="login">
		<h1 class="logo tac login__logo"><span>Photo</span>gram</h1>

		<div class="form">
			<form @submit.prevent="loginUser">
				<!--  Email-->
				<input type="email" name="email" placeholder="Email/Username" v-model="login.email" v-validate="'required|email'" class="form__input" @keydown="clearField">
				<span v-show="errors.has('email')" class="help is-danger">
					{{ errors.first('email') }}
				</span>
				<br>
				<!--  Password-->
				<input type="password" name="password" placeholder="Password" v-model="login.password" v-validate="'required|min:8|verify_password'" class="form__input" @keydown="clearField">
				<span v-show="errors.has('password')" class="help is-danger">
					{{ errors.first('password') }}
				</span>
				<span class="help is-danger" v-text="login.errors"></span>
				<!--  Submit-->
				<span class="form__forgot">Forgot Password?</span>
				<button type="submit" class="btn btn--green form__btn">Log in</button>
				<span>Don't have account? <router-link to="register" class="form__link">Sign up</router-link></span>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				login: {
					email:    '',
					password: '',
					errors:   '',
					token: ''
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
					this.$http.post('http://larapi.com/api/auth/login', dataUser)
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
