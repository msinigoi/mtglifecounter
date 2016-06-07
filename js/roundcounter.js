$("#win1p1").click(function(){
  if ($(this).hasClass("active")) {
    $(this).css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
  } else {
    $(this).css({"background-color" : "BLACK"}).css({"color" : "WHITE"}).addClass("active");
  }
});
$("#win1p2").click(function(){
  if ($(this).hasClass("active")) {
    $(this).css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
  } else {
    $(this).css({"background-color" : "BLACK"}).css({"color" : "WHITE"}).addClass("active");
  }
});
$("#win2p1").click(function(){
  if ($(this).hasClass("active")) {
    $(this).css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
  } else {
    $(this).css({"background-color" : "BLACK"}).css({"color" : "WHITE"}).addClass("active");
  }
});
$("#win2p2").click(function(){
  if ($(this).hasClass("active")) {
    $(this).css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
  } else {
    $(this).css({"background-color" : "BLACK"}).css({"color" : "WHITE"}).addClass("active");
  }
});
