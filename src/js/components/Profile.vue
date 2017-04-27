<template>
	<div class="profilePage">
		<app-header></app-header>
		<div class="container">
			<div class="profile__media">
				<div class="media media--left">
					<h2 class="profile__name" v-for="result in results">{{result.username}}</h2>
					<div v-if="!imgOutput" class="media">
						<img src="http://lorempixel.com/100/100" class="media--left__img imgRound profile__img"/>
					</div>
					<div v-else class="profile__picture__wrapper">
						<img :src="imgOutput" class="media--left__img imgRound profile__img"/>
					</div>
				</div>
				<div class="profile__activity">
						<p class="profile__info tal"><a href="#" class="link--green profile__link">105</a>posts</p>
						<p class="profile__info tal"><a href="#" class="link--green profile__link">55</a>followers</p>
						<p class="profile__info tal"><a href="#" class="link--green profile__link">15</a>following</p>
					</div>
				<p class="profile__text">A person ready to share everything she has with the rest of the world. Enjoy my window to the world!</p>
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
			results: '',
			imgOutput: ''
		}
	},
	created: function(){
		var theRequest   = new XMLHttpRequest(),
			token = localStorage.getItem('token'),
			link = 'http://larapi.com/api/get_user_details?token=' + token;
		this.$http.get(link)
		.then(function(response) {
			 this.results = response.data;
			 var imageName = response.data.result.profile.image_url;
			 this.imgOutput = 'http://larapi.com/public/uploads/' + imageName;
		})
	}

}

</script>
