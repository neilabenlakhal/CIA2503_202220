

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

//Create a new button “Display Paragraph Text” which 
//when clicked will display the text in the paragraph circled in red.
//jQuery is a powerful addition to JavaScript making our web pages more extensible
// Using the paragraph with an id = “test”, let’s select and get its content
// before returning its text on an alert.  See code below: 


/* 
  $(".btn4").click(function(){
    alert("Paragraph Text: " + $("#test").text());
  });  */
});
