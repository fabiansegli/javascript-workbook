window.onload = function() {
    console.log("Javascript connected!")
    populateUsers();

}

/*
<ul id="listOfUsers">
<li>
  <img src="https://randomuser.me/api/portraits/men/4.jpg"/>
  <span>
  Austin Chen
  </span>
  <button data-email= vtylor@gmail.com'>show my email!</button>
 </li>
</ul>
*/
let populateUsers = function(){
fetch("https://randomuser.me/api?results=10")
.then(function(res){
    console.log("processing the result of the fetch call =", res);
    return res.json()
}).then(function(payload){
    console.log("Processing the payload of the fetch api call = ", payload);
    console.log("the list of users = ", payload.results);
    payload.results.forEach(function(user, index){
        console.log('Processing the user at index', index);
        let li = document.createElement('li');
        let img = document.createElement('img');
       // let span = document.createElement('span');
        let ul = document.getElementById('listOfUsers');
        img.setAttribute("src", user.picture.large);
        //span.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        let button = document.createElement('button');
        button.innerText = 'Contact Info';
        button.setAttribute('data-email', user.email);
        button.setAttribute('data-name-first', user.name.first);
        button.setAttribute('data-name-last', user.name.last);
        button.setAttribute('data-cell', user.cell);
        li.appendChild(img);
        //li.appendChild(span);
        li.appendChild(button);
        button.addEventListener('click', showEmailFunction);
        ul.appendChild(li);
    });
});
} 
//passing more than one piece of data and displayimng it after clicking the button
let showEmailFunction = function(event){
let newUl = document.createElement('ul');
var clickedButton = event.target;
console.log('the user that was clicked', clickedButton);
var email = clickedButton.getAttribute('data-email');
var firstName = clickedButton.getAttribute('data-name-first');
var lastName = clickedButton.getAttribute('data-name-last');
var cell = clickedButton.getAttribute('data-cell');
console.log('the email is', email);
var clickedLi = clickedButton.parentElement;
let emailLi = document.createElement('li');
let nameLi = document.createElement('li');
let cellLi = document.createElement('li');
emailLi.innerText = email;
nameLi.innerText = firstName + ' ' + lastName;
cellLi.innerText = cell;
clickedLi.appendChild(newUl);
newUl.appendChild(nameLi);
newUl.appendChild(emailLi);
newUl.appendChild(cellLi);
clickedLi.removeChild(clickedButton);
}
