var weekDay = moment([]).format("dddd");
var month = moment([]).format("MMMM");
var dayOfMonth = moment([]).format("Do");
var first = $(".first").text();
var second = $(".second").text();
var third = $(".third").text();
var fourth = $(".fourth").text();
var fifth = $(".fifth").text();
var sixth = $(".sixth").text();
var seventh = $(".seventh").text();
var eighth = $(".eighth").text();
var ninth = $(".ninth").text();

$("#currentDay").text(weekDay + ", " + month + " " + dayOfMonth);

$(".btn1").click(function() {
    var ta1val = $("#ta1").val();
    console.log(ta1val);
    localStorage.setItem(first, ta1val);
    alert("You have saved to local storage!");
});

$(".btn2").click(function() {
    var ta2val = $("#ta2").val();
    localStorage.setItem(second, ta2val);
    alert("You have saved to local storage!");
});

$(".btn3").click(function() {
    var ta3val = $("#ta3").val();
    localStorage.setItem(third, ta3val);
    alert("You have saved to local storage!");
});

$(".btn4").click(function() {
    var ta4val = $("#ta4").val();
    localStorage.setItem(fourth, ta4val);
    alert("You have saved to local storage!");
});

$(".btn5").click(function() {
    var ta5val = $("#ta5").val();
    localStorage.setItem(fifth, ta5val);
    alert("You have saved to local storage!");
});

$(".btn6").click(function() {
    var ta6val = $("#ta6").val();
    localStorage.setItem(sixth, ta6val);
    alert("You have saved to local storage!");
});

$(".btn7").click(function() {
    var ta7val = $("#ta7").val();
    localStorage.setItem(seventh, ta7val);
    alert("You have saved to local storage!");
});

$(".btn8").click(function() {
    var ta8val = $("#ta8").val();
    localStorage.setItem(eighth, ta8val);
    alert("You have saved to local storage!");
});

$(".btn9").click(function() {
    var ta9val = $("#ta9").val();
    localStorage.setItem(ninth, ta9val);
    alert("You have saved to local storage!");
});

for (var i = 0; i < 9; i++) {
    var check = "ta" + (i + 1);
    var checkHour = $("#" + i).attr("data-hour");
    if (checkHour < moment().hour()){
        $("." + check).attr("class", "col-sm-10 description ta" + i + " past");
    }
    else if (checkHour > moment().hour()){
        $("." + check).attr("class", "col-sm-10 description ta" + i + " future");
    }
    else {
        $("." + check).attr("class", "col-sm-10 description ta" + i + " present");
    }
}

for (var hour = 0; hour < 9; hour++){
    check = "ta" + (hour);
    $("." + check).val(localStorage.getItem($("#" + hour).text()));
}