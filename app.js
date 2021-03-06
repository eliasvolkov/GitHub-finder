const input = document.querySelector('#searchUser');

input.addEventListener('keyup', function (e) {
    const userName = e.target.value;
    
    const github = new GitHub;
    const ui = new UI;

    if(userName !== ''){
        ui.showLoader();
        github.getUser(userName)
            .then(user => {
                if(user.message == 'Not Found'){
                    ui.showAlert('Sorry, user is not found');
                }else{
                    ui.showProfile(user);
                }
        })
    }

    
});