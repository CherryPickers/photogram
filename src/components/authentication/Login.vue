<template>
	<div class="logIn">

		<form @submit.prevent="validateBeforeSubmit">
			<input type="email" name="email" placeholder="Email/Username" v-model="login.email" v-validate="'required|email'" class="logIn__username">
			<span v-show="errors.has('email')" class="help is-danger">
				{{ errors.first('email') }}
			</span>

			<br>

			<input type="password" name="password" placeholder="Password" v-model="login.password" v-validate="'required|min:8|verify_password'" class="logIn__password">
			<span v-show="errors.has('password')" class="help is-danger">
				{{ errors.first('password') }}
			</span>

			<button type="submit" class="logIn__button">Log in</button>
			<span class="forgotPass">Forgot Password?</span>
		</form>

		<router-link to="register"><span>Register</span></router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				login: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			validateBeforeSubmit(e) {
        		this.$validator.validateAll();
		        if (!this.errors.any()) {
		            this.submitForm();
					this.loginUser();
		        }
      		},
			submitForm() {
				this.formSubmitted = true
			},
			loginUser() {
				var dataUser = {
					email: this.login.email,
					password: this.login.password
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
.is-danger {
	font-size: 1em;
	color: red;
}

</style>
