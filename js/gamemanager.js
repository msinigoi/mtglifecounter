$("#resetButton").click(function(){
  $("#player1LifeTotal").text(20);
  $("#player2LifeTotal").text(20);
  $("#player1InfectDamage").text(0);
  $("#player2InfectDamage").text(0);
});

$("#newGameButton").click(function(){
  $("#player1LifeTotal").text(20);
  $("#player2LifeTotal").text(20);
  $("#player1Rounds").text(0);
  $("#player2Rounds").text(0);
  $("#player1InfectDamage").text(0);
  $("#player2InfectDamage").text(0);
  $("#win1p1").css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
  $("#win1p2").css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
  $("#win2p1").css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
  $("#win2p2").css({"background-color" : "WHITE"}).css({"color" : "BLACK"}).removeClass("active");
});
