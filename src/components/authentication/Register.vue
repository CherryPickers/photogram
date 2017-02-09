<template>
	<div class="signUp">
		<input class="signUp__username" type="text" v-model="email" placeholder="Email">
		<input class="signUp__password" type="text" v-model="password" placeholder="Password">
		<input class="signUp__password" type="text" v-model="password" placeholder="Confirm Password">
		<input class="signUp__username" type="text" v-model="email" placeholder="Profil Name">
		<input class="signUp__username" type="text" v-model="email" placeholder="Username">
		<span class="forgotPass">I accept to the Terms & Privacy Policy</span>
		<button class="signUp__button">Sign up</button>
		<span class="forgotPass">Already have Account? LOG IN</span>
	</div>
</template>

<script>
	export default {
			data() {
				return {
					email: '',
					password: ''
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