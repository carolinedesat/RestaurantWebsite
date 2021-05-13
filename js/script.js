/*
  STAFF PASSWORD VALIDATOR
*/

//stores the elements inside a suitable variable
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

//when the button with id "getRandom" is clicked the getRandom() function will be called
document.getElementById('getRandom').addEventListener('click', getRandom);

function getRandom() { //creates the function that will be called
  fetch('https://randomuser.me/api/?results=5') //random user api with 5 results
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

//stores the id="qntx" from the input tag inside a suitable variable
//starters
var soup = document.getElementById("qnt1")
var potato = document.getElementById("qnt2")
var cheeseSalad = document.getElementById("qnt3")
//mains
var fish = document.getElementById("qnt4")
var beef = document.getElementById("qnt5")
var falafel = document.getElementById("qnt6")
//desserts
var chocolat = document.getElementById("qnt7")
var tiramisu = document.getElementById("qnt8")
var fruitSalad = document.getElementById("qnt9")
//drinks
var whiskey = document.getElementById("qnt10")
var gin = document.getElementById("qnt11")
var expresso = document.getElementById("qnt12")
//vegetarian
var vegetarian = document.getElementById("qnt10")

function menuSum() { //creates the function that will be called inside each input tag

  //stores the quanity input multiplied by the data-price inside a suitable variable
  var totalSoup = soup.value * soup.getAttribute("data-price");
  var totalPotato = potato.value * potato.getAttribute("data-price");
  var totalCheeseSalad = cheeseSalad.value * cheeseSalad.getAttribute("data-price");
  //adds the prices of all starters and stores the result inside a suitable variable
  var starterTotal = totalSoup + totalPotato + totalCheeseSalad;

  //stores the quantity input multiplied by the data-price inside a suitable variable
  var totalfish = fish.value * fish.getAttribute("data-price");
  var totalbeef = beef.value * beef.getAttribute("data-price");
  var totalfalafel = falafel.value * falafel.getAttribute("data-price");
  //adds the prices of all mains and stores the result inside a suitable variable
  var mainTotal = totalfish + totalbeef + totalfalafel;

  //stores the quantity input multiplied by the data-price inside a suitable variable
  var totalchocolat = chocolat.value * chocolat.getAttribute("data-price");
  var totaltiramisu = tiramisu.value * tiramisu.getAttribute("data-price");
  var totalfruitSalad = fruitSalad.value * fruitSalad.getAttribute("data-price");
  //adds the prices of all desserts and stores the result inside a suitable variable
  var dessertTotal = totalchocolat + totaltiramisu + totalfruitSalad;

  //stores the quantity input multiplied by the data-price inside a suitable variable
  var totalwhiskey = whiskey.value * whiskey.getAttribute("data-price");
  var totalgin = gin.value * gin.getAttribute("data-price");
  var totalexpresso = expresso.value * expresso.getAttribute("data-price");
  //adds the prices of all drinkss and stores the result inside a suitable variable
  var drinksTotal = totalwhiskey + totalgin + totalexpresso;

  //IsVeg equals the sum of all vegetarian dishes
  var isVeg = totalCheeseSalad + totalfalafel;

  //nonVeg equals the sum of all non-vegetarian dishes
  var nonVeg = totalSoup + totalPotato + totalfish + totalbeef;

  //the overall bill equals the sum of all categories together
  var totalOverallbill = starterTotal + mainTotal + dessertTotal + drinksTotal;

  //output
  //changes the bill value from "€0.0" to the total calculated above
  document.getElementById('StartersTotal').innerHTML = "€" + starterTotal;
  document.getElementById('MainsTotal').innerHTML = "€" + mainTotal;
  document.getElementById('DessertsTotal').innerHTML = "€" + dessertTotal;
  document.getElementById('DrinksTotal').innerHTML = "€" + drinksTotal;
  document.getElementById('ItemsTotal').innerHTML = "€" + totalOverallbill;
  document.getElementById('VegTotal').innerHTML = "€" + isVeg;
  document.getElementById('NonVegTotal').innerHTML = "€" + nonVeg;

}