<template>
	<div class="profilePage">
		<app-header></app-header>
        <div class="container tac">
			<button class="clickme" @click="print">
				click
			</button>
				<li v-for="result in results">
					{{ result.name }}
					<br>
					{{ result.username }}
				</li>
            <div class="profile__intro">
            	<div v-if="!profilImage">
				    <h2>Select an image</h2>
				    <input type="file" @change="onFileChange" name="image">
				</div>
				<div v-else>
					<img :src="profilImage" />
					<button @click="submit">submit</button>
					<button @click="removeImage">Remove image</button>
				</div>
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
	data() {
		return {
			results: '',
			profilImage: ''
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
		},
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
	        vm.profilImage = e.target.result;
	      };
	      reader.readAsDataURL(file);
	    },
	    removeImage: function (e) {
	      this.profilImage = '';
	    },
	    submit: function() {
	    	var token = localStorage.getItem('token');
	    	this.$http.headers.common['Authorization'] = this.$auth.getAuthHeader();
	    	this.$http.post('http://larapi.com/api/update_user_details', {
			  

			})
			.then(response => {
				console.log(response);
				console.log('Authorization' + 'Bearer ' + token);

			}).catch(function (data) { //if there is an error
				console.log(data)
			})
	    }
	}
}


</script>
