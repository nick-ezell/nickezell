$(document).ready(function () {
    //Getting date and dynamically updating
    let dateTime = null,
        date = null;
    let update = function () {
        date = moment(new Date())
        dateTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ssA'));
    };
    dateTime = $('header')
    update();
    setInterval(update, 1000);
    //Declaring variables
    let textarea = $("textarea");
    let seven = $("#sevenAM");
    let eight = $("#eightAM");
    let nine = $("#nineAM");
    let ten = $("#tenAM");
    let eleven = $("#elevenAM");
    let twelve = $("#twelvePM");
    let one = $("#onePM");
    let two = $("#twoPM");
    let three = $("#threePM");
    let four = $("#fourPM");
    let five = $("#fivePM");
    //Storing current hour as a variable
    let now = moment().hour();
    //Coloring textareas by past/present/future times
    function textForEach(){
        textarea.each(function(){
            if(parseInt($(this).attr("data-time")) < now){
                $(this).css("backgroundColor", "lightgrey")
            } else if(parseInt($(this).attr("data-time")) === now){
                $(this).css("backgroundColor", "lightblue")
            } else if (parseInt($(this).attr("data-time")) > now){
                $(this).css("backgroundColor", "#8a49b3")
            }
    })};
    textForEach();
    //Retrieving set values for each hour
    seven.val(localStorage.getItem("7AM"));
    eight.val(localStorage.getItem("8AM"));
    nine.val(localStorage.getItem("9AM"));
    ten.val(localStorage.getItem("10AM"));
    eleven.val(localStorage.getItem("11AM"));
    twelve.val(localStorage.getItem("12PM"));
    one.val(localStorage.getItem("1PM"));
    two.val(localStorage.getItem("2PM"));
    three.val(localStorage.getItem("3PM"));
    four.val(localStorage.getItem("4PM"));
    five.val(localStorage.getItem("5PM"));
    //Click events for setting each hour to storage
    $("#clear").on("click", function () {
        localStorage.clear("7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM");
        seven.val('');
        eight.val('');
        nine.val('');
        ten.val('');
        eleven.val('');
        twelve.val('');
        one.val('');
        two.val('');
        three.val('');
        four.val('');
        five.val('');
    });
    $(".sevenAM").on("click", function () {
        localStorage.setItem("7AM", seven.val());
    });
    $(".eightAM").on("click", function () {
        localStorage.setItem("8AM", eight.val());
    });
    $(".nineAM").on("click", function () {
        localStorage.setItem("9AM", nine.val());
    });
    $(".tenAM").on("click", function () {
        localStorage.setItem("10AM", ten.val());
    });
    $(".elevenAM").on("click", function () {
        localStorage.setItem("11AM", eleven.val());
    });
    $(".twelvePM").on("click", function () {
        localStorage.setItem("12PM", twelve.val());
    });
    $(".onePM").on("click", function () {
        localStorage.setItem("1PM", one.val());
    });
    $(".twoPM").on("click", function () {
        localStorage.setItem("2PM", two.val());
    });
    $(".threePM").on("click", function () {
        localStorage.setItem("3PM", three.val());
    });
    $(".fourPM").on("click", function () {
        localStorage.setItem("4PM", four.val());
    });
    $(".fivePM").on("click", function () {
        localStorage.setItem("5PM", five.val());
    });
});