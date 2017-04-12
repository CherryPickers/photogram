<template>
	<div class="profilePage">
		<app-header></app-header>
        <div class="container tac">
			<button class="clickme" @click="print">
				click
			</button>
            <div class="profile__intro">
            	<p class="profile__text">hi <span>justVR</span>!</p>
				<img src="http://lorempixel.com/150/150/abstract" alt="" class="imgRound">
				<p class="profile__text profile__text--smaller">Change Photo</p>
				<p class="profile__text profile__text--smaller">Edit profile</p>
            </div>
			<div class="profile__body">
				<div class="form">
					<form>
						<input placeholder="Name" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Something about you" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Private information" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="E-mail" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Phone number" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Gender" class="form__input">
						<span class="help is-danger"></span>
						<br>

						<button type="submit" class="btn btn--black form__btn">Save</button>
					</form>

				</div>
			</div>
        </div>
	</div>
</template>
<script>
export default {
	methods: {
		print() {
			var theRequest   = new XMLHttpRequest(),
				token = localStorage.getItem('token'),
				link = 'http://larapi.com/api/get_user_details?token=' + token;
			this.$http.get(link)
			.then(function(response) {
				 this.list = response.data;
				 console.log(response.data);
			})
		}
	}

}

</script>
