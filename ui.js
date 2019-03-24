class UI {
  constructor () {
    this.profile = document.querySelector('#profile');
  }

  showAlert(textAlert){
    this.profile.innerHTML =`
      <div class="alert alert-danger" role="alert">
        ${textAlert}
      </div>`;
  }

  showProfile(user){
    this.profile.innerHTML = `
			<div class="card card-body">
			<div class="row">
			<div class="col-md-3">
					<img src="${user.avatar_url}" class="img-fluid mb-2" alt="userAvatar">
					<a href="${user.html_url}" class="btn btn-primary btn-block mt-4" style="weight: 100%">View profile</a>
			</div>
			<div class="col-md-9">
					<div class="card-body">
							<span class="badge badge-primary">Public repos: ${user.public_repos}</span>
							<span class="badge badge-secondary">Followers: ${user.followers}</span>
							<span class="badge badge-success">Following: ${user.following}</span>
						<ul class="list-group mt-3">
							<li class="list-group-item ">Username: ${user.login}</li>
							<li class="list-group-item">Bio: ${user.bio}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member since: ${user.created_at}</li>
						</ul>
					</div>
			</div>
			</div>
		</div>
			`;
  }
  
  showLoader(){
    this.profile.innerHTML = ` 
			<div class="spinner-grow text-primary" style="position: absolute; left: 45%;" role="status">
					<span class="sr-only"></span>
			</div>`;
  }
}