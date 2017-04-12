<template>
	<div class="profilePage">
		<app-header></app-header>
		<div class="container tac">
			<div class="media media--left">
				<h2 class="profile__text">user_name</h2>
				<img src="http://lorempixel.com/120/120/animals/1" alt="" class="media--left__img imgRound profile__img">
				<div class="subtitle media__title">
					<p class="profile__info tal"><a href="#" class="link--green profile__link">105</a>posts</p>
					<p class="profile__info tal"><a href="#" class="link--green profile__link">55</a>followers</p>
					<p class="profile__info tal"><a href="#" class="link--green profile__link">15</a>following</p>
				</div>
			</div>
			<router-link to="edit-profile" class="btn btn--gray profile__btn">Edit profile</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			results: ''
		}
	},
	methods: {
		print() {
			var theRequest   = new XMLHttpRequest(),
				token = localStorage.getItem('token'),
				link = 'http://larapi.com/api/get_user_details?token=' + token;
			this.$http.get(link)
			.then(function(response) {
				 this.results = response.data;
			})
		}
	}

}

</script>
