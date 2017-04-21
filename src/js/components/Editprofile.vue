<template>
	<div class="profilePage">
		<app-header></app-header>
        <div class="container tac">
			<div class="profile__body">
				<div class="form">
					<form id="editForm" enctype="multipart/for-data" @submit.prevent="updateForm">
						<div class="profile__intro">
		            	<div>
		            	<p class="profile__text profile__text--smaller">Edit profile</p>
							<div v-if="!image">
								<input type="file" name="image">
							</div>
							<div v-else>
								<img :src="'imageUrl'+'profile.image_url'" />
								<button @click="removeImage">Remove image</button>
							</div>
							</div>
							<!-- <p class="profile__text profile__text--smaller">Change Photo</p> -->

			            </div>
						<input placeholder="Name" name="name" type="text" class="form__input" value="">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Something about you" name="username" type="text" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Private information" name="email" type="text" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="E-mail" class="form__input" >
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Phone number" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<input placeholder="Gender" class="form__input">
						<span class="help is-danger"></span>
						<br>
						<div v-for="result in results">

						</div>

						<button type="submit" class="btn btn--black form__btn">Save</button>
					</form>
					<button @click="imgconsole">consloleImg</button>
				</div>
			</div>
        </div>
	</div>
</template>
<script>
// const imageUrl = 'http://larapi.com/public/uploads/';
export default {
	data() {
		return {
			results: '',
			image: '',
			profilePicture: '',
			fileUploadFormData: new FormData(),
			imageUrl :'http://larapi.com/public/uploads/'
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
			var imgUrl = 'http://larapi.com/public/uploads/';
	       	var form = document.querySelector('form');
			var formdata = new FormData(form);
			var token = localStorage.getItem('token');
			console.log(formdata)
			this.$http.post('http://larapi.com/api/update_user_details', formdata, {
			// Attach the JWT header
				headers: this.$auth.getAuthHeader()

				})

			.then((response) => {
					// this.$router.push({path: '/profile', query: {alert: response.message}})
					console.log(response)
			},(response) => {
				console.log('error callback')
	       });
		},
		imgconsole: function() {
			console.log(imageUrl);
		}

	},
	created: function() {
		var theRequest   = new XMLHttpRequest(),
				token = localStorage.getItem('token'),
				link = 'http://larapi.com/api/get_user_details?token=' + token;
			this.$http.get(link)
			.then(function(response) {
				 this.results = response.data;
				 console.log(this.results);

			})
	}

}

</script>
