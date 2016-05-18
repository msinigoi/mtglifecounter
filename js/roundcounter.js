$("#player1Rounds").click(function(){
  var roundsWon = ($("#player1Rounds").text());
  var roundsWonAsInt = parseInt(roundsWon, 10);
  var roundsWonAsInt = roundsWonAsInt+1;
  $("#player1Rounds").text(roundsWonAsInt);
  $("#player1Rounds").css("font-weight", "bold");
});

$("#player2Rounds").click(function(){
  var roundsWon = ($("#player2Rounds").text());
  var roundsWonAsInt = parseInt(roundsWon, 10);
  var roundsWonAsInt = roundsWonAsInt+1;
  $("#player2Rounds").text(roundsWonAsInt);
  $("#player2Rounds").css("font-weight", "bold");
});
