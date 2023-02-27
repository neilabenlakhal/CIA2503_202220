window.onload = function() {
    $(function(){ alert("jQuery + DOM loaded."); });
}
$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").toggle();
  });
   $(".btn2").click(function(){
    $("h2").toggle();
  });    
  $(".btn3").click(function(){
    $("#test").toggle();
  });   
  $("input").focus(function(){
    $(this).css("background-color", "lightblue");
  });
  $("input").blur(function(){
    $(this).css("background-color", "lightgreen");
  });
  $(".btn4").click(function(){
    alert("Paragraph Text: " + $("#test").text());
  }); 
  $(".btn5").click(function(){
    alert("Course Code: " + $("#cc").val() + " Course Name: " + $("#cn").val());
    $("#p1").text("Course Code entered: "+ $("#cc").val()); 
    $("#p2").text("Course Name entered: "+ $("#cn").val());  
    $("#heading1").append(" - "+ $("#fn").val()); 
    $("#div1").remove();
  });
  $(".btn6").click(function(){
    $("h2,#p1,#p2").toggleClass("blue");
    $("div").toggleClass("important");
  }); 
    
  $("div").find("span").css({"color":"red"});
  $("div").children().css({"color":"red"});
    
});