/*
  STAFF PASSWORD VALIDATOR
*/

var myInput = document.getElementById('pass');
var letter = document.getElementById('lowerCa');
var capital = document.getElementById('upperCa');
var number = document.getElementById('number');
var length = document.getElementById('length');

//shows the message box when the user clicks on the password field
myInput.onfocus = function() {
  document.getElementById('message').style.display = block;
}

//hides the message box when the user clicks on the password field
myInput.onblur = function() {
  document.getElementById('message').style.display = 'none';
}

myInput.onkeyup = function() {
  //validates lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  //validates uppercase letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //validates numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validates length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

/*
  RANDOM USER GENERATOR
*/

document.getElementById('getRandom').addEventListener('click', getRandom);

function getRandom() {
    fetch('https://randomuser.me/api/?results=1')
    .then((res) => res.json())
    .then((data) => {
        let author = data.results;
        let output = ''
        console.log(data);
        author.forEach(function(user){
            output += `
            <div>
                <div><img src="${user.picture.large}"></div>
                  <p>Name: ${user.name.first} ${user.name.last}</p>
                  <p>Email: ${user.email}</p>
                  <p>Phone Number: ${user.phone}</p>
            </div>
            `;
        });

        document.getElementById('output').innerHTML = output;

    })
}