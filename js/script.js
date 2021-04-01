var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var char = document.getElementById("char");
var length = document.getElementById("length");

//WHEN THE USER CLICKS ON THE PASSWORD FIELD, SHOW THE MESSAGE BOX
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

//WHEN THE USER CLICKS OUTSIDE THE PASSWORD FIELS, HIDE THE MESSAGE BOX
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

//WHEN THE USER STARTS TO TYPE SOMETHING INSIDE THE PASSWORD FIELD
myInput.onkeyup = function() {
  //VALIDADE LOWERCASE LETTERS
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  //VALIDATE UPPERCASE LETTERS
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //VALIDADE NUMBERS
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //VALIDATE SPECIAL CHARACTERS
  var char = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
  if(myInput.value.match(chars)) {
    char.classList.remove("invalid");
    char.classList.add("valid");
  } else {
    char.classList.remove("valid");
    char.classList.add("invalid");
  }

  //VALIDADE LENGTH
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}