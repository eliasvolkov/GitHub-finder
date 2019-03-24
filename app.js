const input = document.querySelector('#searchUser');

input.addEventListener('keyup', function (e) {
    const userName = e.target.value;
    
    const github = new GitHub;

    if(userName !== ''){
        github.getUser(userName)
            .then(user => {
                if(user.message == 'Not Found'){
                    //show alert
                }else{
                    //show profile
                }
        })
    }

    
});