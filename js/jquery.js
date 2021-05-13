/*
  "CLICK ME" BUTOON ANIMATION
*/

//when the button is clicked
$(document).ready(function () {
  $(".clickme").click(function () {
    $(".container").animate({ height: 'toggle' }); //the button itself and the "welcome" block will toggle up
    $(".grid-container").animate({ opacity: "0.9" }); //the animation container will appear
  });
});

/*
  FIRST BLOCK (STARTERS) ANIMATION
*/

//when the soup is clicked, all images and title will disappear
$(document).ready(() => {
  $("#div1").click(() => {
    $("#div1").animate({ opacity: "0.0" });
    $("#div2").animate({ opacity: "0.0" });
    $("#div3").animate({ opacity: "0.0" });
    $("#t1").animate({ opacity: "0.0" });
  });
});

/*
  SECOND BLOCK (MAINS) ANIMATION
*/

//when the stew is clicked
$(document).ready(() => {
  $("#div5").click(() => {
    $("#div4").animate({ width: 'toggle' }, "slow"); //the fish and chips will toggle to the side
    $("#div5").animate({ height: 'toggle' }, "slow"); //the stew will toggle up
    $("#div6").animate({ opacity: "0.0" }); //the falafel burguer and title will disappear
    $("#t2").animate({ opacity: "0.0" }); //the title will desappear
  });
});

/*
  THIRD BLOCK (DESSERTS) ANIMATION
*/

//when the brownie is clicked
$(document).ready(() => {
  $("#div7").click(() => {
    $("#div7").animate({ width: 'toggle' }, "slow"); //the brownie will toggle to the side
    $("#div8").animate({ opacity: "0.0" }); //the tiramisu will disappear
    $("#div9").animate({ width: 'toggle' }, "fast"); //the fruit salad will toggle to the side
    $("#t3").animate({ opacity: "0.0" }); //the title will desappear
  });
});

/*
  FOURTH BLOCK (DRINKS) ANIMATION
*/

$(document).ready(function () {
  $("#div10").click(function () { //when the whiskey sour is clicked
    $("#div10").animate({ opacity: "0.0" }); //the whiskey sour will disappear
    $("#t4").animate({ opacity: "0.0" }); //the title will desappear
  });
  $("#div11").click(function () { //when the gin bamble is clicked
    $("#div11").animate({ opacity: "0.0" }); //the gin bamble will disappear
  });
});

$(document).ready(function () {
  $("#div12").click(function () { //when the expresso martini is clicked
    $(".grid-container").hide(); //the whole container will be hidden
    $(".booking").show(); //the booking information block will be shown
  });
});