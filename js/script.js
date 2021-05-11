/*
  STAFF PASSWORD VALIDATOR
*/

var myInput = document.getElementById('pass');
var letter = document.getElementById('lowerCa');
var capital = document.getElementById('upperCa');
var number = document.getElementById('number');
var length = document.getElementById('length');

//shows the message box when the user clicks on the password field
myInput.onfocus = function () {
  document.getElementById('message').style.display = block;
}

//hides the message box when the user clicks on the password field
myInput.onblur = function () {
  document.getElementById('message').style.display = 'none';
}

myInput.onkeyup = function () {
  //validates lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //validates uppercase letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //validates numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //validates length
  if (myInput.value.length >= 8) {
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

//everytime the button with ID "getRandom" is clicked the getRandom() function will be called
document.getElementById('getRandom').addEventListener('click', getRandom);

function getRandom() { //creates the function that will be called
  fetch('https://randomuser.me/api/?results=5') //random user API with 5 results
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;
      let output = ''
      console.log(data);
      author.forEach(function (user) {
        //specifies the output format (medium picture, first and last names and phone number)
        output += `
            <div>
                <div><img src="${user.picture.medium}"></div>
                  <p>Name: ${user.name.first} ${user.name.last}</p>
                  <p>Phone Number: ${user.phone}</p>
            </div>
            `;
      });
      //shows the output format
      document.getElementById('output').innerHTML = output;

    })
}

/*
  MENU
*/

//overall bill
var total_items = 12;

function CalculateItemsValue() { //creates the function that will be called
  var total = 0;

  for (let i = 1; i <= total_items; i++) {
    itemID = document.getElementById("qnt" + i);
    total = total + parseFloat(itemID.value) * parseFloat(itemID.getAttribute("data-price"));

  }
  document.getElementById('ItemsTotal').innerHTML = "€" + total;
}

document.querySelectorAll('[id^="qnt"]').forEach(item => {
  item.addEventListener('keyup', CalculateItemsValue);
});

//starters, mains, desserts and drinks bill
function GetCategoryTotal(categoryDivId) {
  inputs = document.getElementById(categoryDivId).getElementsByTagName('input');
  var categoryTotal = 0;

  for (let i = 1; i <= inputs.count; i++) {
      item = inputs[i]
      categoryTotal = categoryTotal + parseFloat(item.value) * parseFloat(item.getAttribute("data-price"));
  }
  
  return categoryTotal;
}

document.getElementById('StartersTotal').innerHTML = "€" + GetCategoryTotal("starters");
document.getElementById('MainsTotal').innerHTML = "€" + GetCategoryTotal("mains");
document.getElementById('DessertsTotal').innerHTML = "€" + GetCategoryTotal("desserts");
document.getElementById('DrinksTotal').innerHTML = "€" + GetCategoryTotal("drinks");

