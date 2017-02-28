<template>
<div class="register">

	<div class="signUp">
		<form @submit.prevent="validateBeforeSubmit">
			<input type="text" name="email" placeholder="Email" v-model="email" v-validate="'required|email'" class="signUp__username">
			<span v-show="errors.has('email')" class="help is-danger">
				{{ errors.first('email') }}
			</span>

			<input type="password" name="password" placeholder="Password" v-model="password" v-validate="'required|min:8|verify_password'" class="signUp__password">
			<span v-show="errors.has('password')" class="help is-danger">
				{{ errors.first('password') }}
			</span>

			<input class="signUp__password" type="password" v-model="confirmPassword" placeholder="Confirm Password" name="registerConfirmedEmail">
			<input class="signUp__username" type="text" v-model="name" placeholder="Profil Name" name="registerName">
			<input class="signUp__username" type="text" v-model="username" placeholder="Username" name="registerUsername">
			<span class="forgotPass">I accept to the Terms & Privacy Policy</span>
			<button class="signUp__button">Sign up</button>
			<span class="forgotPass">Already have the account? <router-link to="register">LOG IN</router-link></span>
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
					confirmPassword: '',
					name: '',
					username: ''
				}
			},
			methods: {
				validateBeforeSubmit(e) {
	        		this.$validator.validateAll();
			        if (!this.errors.any()) {
			            this.submitForm();
						this.registerUser();
			        }
	      		},
				submitForm() {
					this.formSubmitted = true
				},
				loginUser() {
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
