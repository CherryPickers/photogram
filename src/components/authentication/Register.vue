<template>
<div class="register">

	<div class="signUp">
		<form @submit.prevent="validateBeforeSubmit">
			<!--Email-->
			<input type="text" name="email" placeholder="Email" v-model="email" v-validate="'required|email'" class="signUp__username">
			<span v-show="errors.has('email')" class="help is-danger">
				{{ errors.first('email') }}
			</span>

			<!--Password-->
			<input type="password" name="password" placeholder="Password" v-model="password" v-validate="'required|min:8|verify_password|confirmed:reenteredPassword'" class="signUp__password">
			<span v-show="errors.has('password')" class="help is-danger">
				{{ errors.first('password') }}
			</span>

			<!--Reenter Password-->
			<input type="password" name="reenteredPassword" placeholder="Confirm Password" v-model="reenteredPassword" v-validate="'required'" class="signUp__password">
			<span v-show="fields.failed('password')" class="help is-danger">{{ errors.first('password') }}</span>

			<!--Username-->
			<input type="text" name="registerName" placeholder="Profil Name" v-model="name" class="signUp__username">
			<input type="text" name="registerUsername" placeholder="Username" v-model="username" class="signUp__username" >
		<span class="forgotPass">Forget Password?</span>
			<button class="signUp__button">Sign up</button>
			<span class="forgotPass">Already have the account? <router-link to="register">LOG IN</router-link></span>
			<br>
			<span class="forgotPass">I accept to the Terms & Privacy Policy</span>
		</form>
	</div>
</div>
</template>

<script>
	export default {
			data() {
				return {
					email: '',
					password: '',
					reenteredPassword: '',
					name: '',
					username: ''
				}
			},
			methods: {
				validateBeforeSubmit(e) {
					this.$validator.validateAll().then(() => {
						//success
						this.submitForm();
					    this.loginUser();
					    this.matchPassword();
					}).catch(() => {
						//it has failed
					    console.log('something went wrong!');
					});
	      		},
				submitForm() {
					this.formSubmitted = true
				},
				registerUser() {
					var dataUser = {
						email: this.email,
						password: this.password,
						name: this.name
					}
					this.$http.post("http://lar.com/api/api/v1/auth/register", dataUser)
					.then(response => {
						this.$auth.setToken(response.body.token)
				    	this.$router.push("/home")
				  	})
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
