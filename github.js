class GitHub {
    constructor () {
        this.clientID = 'cd1928775dffeab9ceb1';
        this.clientSecret = 'cb8b17b979a6168ccdd20ab27328e8356a77e508';
    }

    getUser(user){
        return fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`)
        .then(res => res.json())
        .then(user => user)
        .catch(err => err);
    }
    
}
