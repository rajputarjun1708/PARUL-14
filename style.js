$(document).ready(function(){
  
  
  $("#ily").hover(function(){
    $("#ily").removeClass("w3-red");
    $("body").removeClass("w3-pale-red");
    $("body").addClass("w3-red");
    $("#ily").addClass("w3-pale-red");
    }, function(){
    $("#ily").removeClass("w3-pale-red");
    $("body").removeClass("w3-red");
    $("body").addClass("w3-pale-red");
    $("#ily").addClass("w3-red");
 });
 
  $("#yes").click(function(){   
    $("#noimg").hide("fast");
    $("#yesimg").fadeIn(3000);     
  });
  $("#no").click(function(){
    $("#yesimg").hide("fast");
    $("#noimg").fadeIn(3000);      
  });
 
});