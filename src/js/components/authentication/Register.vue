<template>
<div class="register">
	<h1 class="logo tac register__logo">Photo<span>gram</span></h1>

	<div class="form">
		<form @submit.prevent="registerUser">
			<!--Email-->
			<input type="text" name="email" placeholder="Email" v-model="register.email" v-validate="'required|email'" class="form__input">
			<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
			<!--Password-->
			<input type="password" name="password" placeholder="Password" v-model="register.password" v-validate="'required|min:8|verify_password|confirmed:reenteredPassword'" class="form__input">
			<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
			<!--Reenter Password-->
			<input type="password" name="reenteredPassword" placeholder="Confirm Password" v-model="register.reenteredPassword" v-validate="'required'" class="form__input">
			<span v-show="fields.failed('password')" class="help is-danger">{{ errors.first('password') }}</span>
			<!--Username-->
			<input type="text" name="username" placeholder="Username" v-model="register.username" class="form__input">
			<span class="help is-danger" v-text="register.errors"></span>

			<!--  Static-->
			<span class="form__forgot">I accept the <router-link to="/terms-and-condition" class="form__link">Terms & Privacy Policy</router-link></span>
			<button class="btn btn--green form__btn">Sign up</button>
			<span class="form__forgot">Already have the account? <router-link to="/" class="form__link">LOG IN</router-link></span>
			<br>
		
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
</style>
