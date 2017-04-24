<template>
	<header class="header">
		<div class="header__contentHolder">
			<h1 class="logo">Photo<span>gram</span></h1>
			<nav class="mainNav mainNav--left">
				<router-link to="home" class="mainNav__link"><span>Home</span></router-link>|
				<router-link to="profile" class="mainNav__link"><span v-for="result in results">
					<span v-if="!imgOutput" class="mainNav__img">
						<input type="file" name="image">
						<img src="http://lorempixel.com/100/100"/>
					</span>
					<span v-else class="mainNav__img">
						<img :src="imgOutput"/>
					</span>
				</span></router-link>|
				<button type="button" name="button" @click="logOut" class="mainNav__link">Sign out</button>
			</nav>
			<nav class="mainNav mainNav--right">
				<a href="#" class="mainNav__link">search</a>
				<a href="#" class="mainNav__link">srb</a>
			</nav>
		</div>
 	</header>
</template>

<script>
	export default {
		data() {
		return {
			results: ''
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
	},
		methods: {
			logOut() {
				this.$auth.destroyToken()
					this.$router.push("/")
			}
		}
	}


</script>
</script>
