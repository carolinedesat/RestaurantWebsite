/*
  "SHOW THE MENU" BUTOON ANIMATION
*/

$(document).ready(function () {
  $(".clickme").click(function () {
    $(".grid-container").animate({ opacity: "1.0" });
  });
});

$(".clickme").click(function () {
  $(".clickme").fadeOut();
});

/*
  FIRST BLOCK (STARTERS) ANIMATION
*/

//everytime the soup is clicked, all images will toggle to the left
$(document).ready(() => {
  $("#div1").click(() => {
    $("#div1").animate({
      width: 'toggle'
    });
  });
});

$(document).ready(() => {
  $("#div1").click(() => {
    $("#div2").animate({
      width: 'toggle'
    });
  });
});

$(document).ready(() => {
  $("#div1").click(() => {
    $("#div3").animate({
      width: 'toggle'
    });
  });
});

//everytime the soup is clicked, the title will fade out
$("#div1").click(function () {
  $("#t1").fadeOut();
});

/*
  SECOND BLOCK (MAINS) ANIMATION
*/

//everytime the burguer is clicked, all images will toggle to the top
$(document).ready(() => {
  $("#div6").click(() => {
    var div = $("#div4");
    div.animate({ height: 'toggle' }, "slow");

  });
});

$(document).ready(() => {
  $("#div6").click(() => {
    var div = $("#div5");
    div.animate({ height: 'toggle' }, "slow");

  });
});

$(document).ready(() => {
  $("#div6").click(() => {
    var div = $("#div6");
    div.animate({ height: 'toggle' }, "slow");

  });
});

//everytime the soup is clicked, the title will fade out
$("#div6").click(function () {
  $("#t2").fadeOut();
});

/*
  THIRD BLOCK (DESSERTS) ANIMATION
*/

$(document).ready(function () {
  $("#div7").click(function () {
    $("#div7").animate({ opacity: "0.0" });
  });
  $("#div8").click(function () {
    $("#div8").animate({ opacity: "0.0" });
  });
  $("#div9").click(function () {
    $("#div9").animate({ opacity: "0.0" });
  });
});

$("#div7").click(function () {
  $("#t3").fadeOut();
  $("#t4").fadeIn();
});

$("#div8").click(function () {
  $("#t4").fadeOut();
  $("#t5").fadeIn();
});

$("#div9").click(function () {
  $("#t5").fadeOut();
});

/*
  FOURTH BLOCK (DRINKS) ANIMATION
*/

$(document).ready(() => {
  $("#div10").click(() => {
    var div = $("#div10");
    div.animate({ width: 'toggle' }, "slow");

  });
});

$(document).ready(() => {
  $("#div10").click(() => {
    var div = $("#div11");
    div.animate({ width: 'toggle' }, "slow");

  });
});

$(document).ready(() => {
  $("#div10").click(() => {
    var div = $("#div12");
    div.animate({ width: 'toggle' }, "slow");

  });
});

$("#div10").click(function () {
  $("#t6").fadeOut();
  $(".booking").fadeIn();
});