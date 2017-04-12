<template>
	<div class="profilePage">
		<app-header></app-header>
		<div class="container">
			<div class="profile__media tac">
				<div class="media media--left">
					<h2 class="profile__text">user_name</h2>
					<img src="http://lorempixel.com/120/120/animals/1" alt="" class="media--left__img imgRound profile__img">
					<div class="subtitle media__title">
						<p class="profile__info tal"><a href="#" class="link--green profile__link">105</a>posts</p>
						<p class="profile__info tal"><a href="#" class="link--green profile__link">55</a>followers</p>
						<p class="profile__info tal"><a href="#" class="link--green profile__link">15</a>following</p>
					</div>
				</div>
				<p class="text profile__text">A person ready to share everything she has with the rest of the world. Enjoy my window to the world!</p>
				<router-link to="edit-profile" class="btn btn--gray profile__btn">Edit profile</router-link>
			</div>

			<!--  Profile Feed-->
			<div class="row">
				<header class="profile__feedHeader tac">
					<span class="square square--full profile__square"></span>
					<span class="square square--cross"></span>
				</header>
				<div class="col-desk-4 col-tab-3">
					<div class="feed__item">
						<div class="media">
							<img src="http://lorempixel.com/200/200/animals" alt="" class="media__img--main">
							<span class="media__likes">justvr and 45 others</span>
							<hr class="divider">
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/2" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">Awwwww</p>
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/3" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">niceee <3 </p>
						</div>
						<a href="#"><p class="media__moreComments">view all comments</p></a>
					</div>
				</div>
				<div class="col-desk-4 col-tab-3">
					<div class="feed__item">
						<div class="media">
							<img src="http://lorempixel.com/200/200/animals" alt="" class="media__img--main">
							<span class="media__likes">justvr and 45 others</span>
							<hr class="divider">
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/2" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">Awwwww</p>
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/3" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">niceee <3 </p>
						</div>
						<a href="#"><p class="media__moreComments">view all comments</p></a>
					</div>
				</div>
				<div class="col-desk-4 col-tab-3">
					<div class="feed__item">
						<div class="media">
							<img src="http://lorempixel.com/200/200/animals" alt="" class="media__img--main">
							<span class="media__likes">justvr and 45 others</span>
							<hr class="divider">
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/2" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">Awwwww</p>
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/3" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">niceee <3 </p>
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/3" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">niceee <3 </p>
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/3" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">niceee <3 </p>
						</div>
						<a href="#"><p class="media__moreComments">view all comments</p></a>
					</div>
				</div>
				<div class="col-desk-4 col-tab-3">
					<div class="feed__item">
						<div class="media">
							<img src="http://lorempixel.com/200/200/animals" alt="" class="media__img--main">
							<span class="media__likes">justvr and 45 others</span>
							<hr class="divider">
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/2" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">Awwwww</p>
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/3" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">niceee <3 </p>
						</div>
						<a href="#"><p class="media__moreComments">view all comments</p></a>
					</div>
				</div>
				<div class="col-desk-4 col-tab-3">
					<div class="feed__item">
						<div class="media">
							<img src="http://lorempixel.com/200/200/animals" alt="" class="media__img--main">
							<span class="media__likes">justvr and 45 others</span>
							<hr class="divider">
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/2" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">Awwwww</p>
						</div>
						<div class="media media--left">
							<img src="http://lorempixel.com/20/20/animals/3" alt="" class="media--left__img imgRound">
							<p class="subtitle media__comment">niceee <3 </p>
						</div>
						<a href="#"><p class="media__moreComments">view all comments</p></a>
					</div>
				</div>
			</div>
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
