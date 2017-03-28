<template>
<div class="register">

	<div class="signUp">
		<form @submit.prevent="registerUser">
			<!--Email-->
			<input type="text" name="email" placeholder="Email" v-model="register.email" v-validate="'required|email'" class="signUp__username">
			<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
			<!--Password-->
			<input type="password" name="password" placeholder="Password" v-model="register.password" v-validate="'required|min:8|verify_password|confirmed:reenteredPassword'" class="signUp__password">
			<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
			<!--Reenter Password-->
			<input type="password" name="reenteredPassword" placeholder="Confirm Password" v-model="register.reenteredPassword" v-validate="'required'" class="signUp__password">
			<span v-show="fields.failed('password')" class="help is-danger">{{ errors.first('password') }}</span>
			<!--Name-->
			<input type="text" name="name" placeholder="Profile Name" v-model="register.name" class="signUp__username">
			<!--Username-->
			<input type="text" name="username" placeholder="Username" v-model="register.username" class="signUp__username">
			<span class="help is-danger" v-text="register.errors"></span>
			<!--  Static-->
			<span class="forgotPass">Forget Password?</span>
			<button class="signUp__button">Sign up</button>
			<span class="forgotPass">Already have the account? <router-link to="/">LOG IN</router-link></span>
			<br>
			<span class="forgotPass">I accept the <a href="#">Terms & Privacy Policy</a></span>
		</form>
	</div>
</div>
</template>

<script>
	export default {
			data() {
				return {
					register: {
						email:             '',
						password:          '',
						reenteredPassword: '',
						name:              '',
						username:          '',
						errors:          '',
					}
				}
			},
			methods: {
				registerUser() {
					if (!this.errors.any() && this.$validator.validateAll()) {
						var dataUser = {
							email:    this.register.email,
							password: this.register.password,
							name:     this.register.name,
							username: this.register.username
						}
						this.$http.post("http://larapi.com/api/auth/register", dataUser)
						.then(response => {
							this.$auth.setToken(response.body.token)
							this.$router.push("/home")
						}).catch(function (data) { //if there is an error
							this.register.errors = 'Invalid email or password'; //write into errors field
						})
					}
				}
			}
		}
</script>

<style>
	.signUp {
		width: 30%;
		margin: 2rem auto;
	}
	.signUp__username, .signUp__password {
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
	.signUp__button {
		width: 100%;
		margin: 2rem 0;
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
