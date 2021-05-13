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

$(document).ready(() => {
    $("#div4").click(() => {
        var div = $("#div4");
        div.animate({ height: 'toggle' }, "slow");
    });
});

$(document).ready(() => {
    $("#div4").click(() => {
        var div = $("#div5");
        div.animate({ height: 'toggle' }, "slow");
    });
});

$(document).ready(() => {
    $("#div4").click(() => {
        var div = $("#div6");
        div.animate({ height: 'toggle' }, "slow");
    });
});