

window.onload = function () {
    $(function () { alert("jQuery + DOM loaded."); });
}

$(document).ready(function () {
    $(".btn1").click(function () {
        $("p").toggle();
    });
    $(".btn2").click(function () {
        $("h2").toggle();
    });
    $(".btn3").click(function () {
        $("#test").toggle();
    });
    $("input").focus(function () {
        $(this).css("background-color", "lightblue");
    });
    $("input").blur(function () {
        $(this).css("background-color", "lightgreen");
    });
    $(".btn4").click(function () {
        alert("Paragraph Text: " + $("#test").text());  // get
    });
    $(".btn5").click(function () {
        alert("course code : " + $("#code").val() + "course name: " + $("#name").val());

        $("#p1").text("Course Code entered: " + $("#code").val());  //set
        $("#p2").text("Course Name entered: " + $("#name").val());  //set
       $("#heading").append(" - "+ $("#student").val());
     // $("#heading").text(" - "+ $("#student").val());   
    $("#div1").remove(); 

    });
});
