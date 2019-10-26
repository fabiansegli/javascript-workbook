window.onload = function() {
    console.log("Javascript connected!")
    populateUsers();

}

let populateUsers = function(){
fetch("https://randomuser.me/api?results=10")
.then(function(res){
    console.log("processing the result of the fetch call =", res);
    return res.json()
}).then(function(payload){
    console.log("Processing the payload of the fetch api call = ", payload);
    console.log("the list of users = ", payload.results);
    payload.results.forEach(element => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let span = document.createElement('span');
        let ul = document.createElement('listOfUsers');
        img.setAttribute("src", user.picture.large);
    });
});
}