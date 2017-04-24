<template>
	<div class="profilePage">
		<app-header></app-header>
        <div class="container tac">
			<div class="profile__body">
				<div class="form">
					<form id="editForm" enctype="multipart/for-data" @submit.prevent="updateForm">
						<div class="profile__intro">
		            	<p class="profile__text profile__text--smaller">Edit profile</p>
						<div v-if="!imgOutput" class="media">
							<input type="file" name="image">
							<img src="http://lorempixel.com/100/100" class="media--left__img imgRound profile__img"/>
						</div>
						<div v-else class="profile__picture">
							<img :src="imgOutput" class="media--left__img imgRound profile__img"/>
						</div>
						<!-- <p class="profile__text profile__text--smaller">Change Photo</p> -->
			            </div>
						<input placeholder="Name" name="name" type="text" class="form__input form__input--colorBlack" value="">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Username" name="username" type="text" class="form__input form__input--colorBlack">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Something about you" name="information" type="text" class="form__input form__input--colorBlack">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Private information" name="email" type="text" class="form__input form__input--colorBlack">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="E-mail" class="form__input form__input--colorBlack" >
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Phone number" class="form__input form__input--colorBlack">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Gender" class="form__input form__input--colorBlack">
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
	data() {
		return {
			results: '',
			image: '',
			profilePicture: '',
			fileUploadFormData: new FormData(),
			imgOutput: ''
		}
	},
	watch : {
        profilePicture: function () {
            this.updateProfilePic();
        }
    },
	methods: {
		// DISPLAY IMAGE IN CLIENT BROWSER
		onFileChange(e) {
	      var files = e.target.files || e.dataTransfer.files;
	      if (!files.length)
	        return;
	      this.createImage(files[0]);
	    },
	    createImage(file) {
	      var image = new Image();
	      var reader = new FileReader();
	      var vm = this;

	      reader.onload = (e) => {
	        vm.image = e.target.result;
	      };
	      reader.readAsDataURL(file);
	    },
	    removeImage: function (e) {
	      this.image = '';
	    },
	    fetchTask: function() {
	    	var token = localStorage.getItem('token');
	    	 this.$http.post('http://larapi.com/api/update_user_details', (data) => {
	    	 	this.image = data;
          	}, {
            // Attach the JWT header
            	headers: this.$auth.getAuthHeader()
          	})
	    	 .then(response => { //if success
			  	}).catch(function (data) { //if there is an error
				})
	    },
	    updateForm: function() {
			var imgUrl = 'http://larapi.com/public/uploads/',
	       		form = document.querySelector('form'),
				formdata = new FormData(form),
				token = localStorage.getItem('token');
			this.$http.post('http://larapi.com/api/update_user_details', formdata, {
			// Attach the JWT header
				headers: this.$auth.getAuthHeader()
				})
			.then((response) => {
					// this.$router.push({path: '/profile', query: {alert: response.message}})
					var imageName = response.data.result.profile.image_url;
					this.imgOutput = 'http://larapi.com/public/uploads/' + imageName;
			},(response) => {
				console.log('error callback')
	       });
		}
	},
	created: function() {
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
