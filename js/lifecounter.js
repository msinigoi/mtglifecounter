$("#minusButton1P1").click(function(){
  var lifeTotal = ($("#player1LifeTotal").text());
  var lifeTotalAsInt = parseInt(lifeTotal, 10);
  var lifeTotalAsInt = lifeTotalAsInt-1;
  $("#player1LifeTotal").text(lifeTotalAsInt);
});

$("#plusButton1P1").click(function(){
  var lifeTotal = ($("#player1LifeTotal").text());
  var lifeTotalAsInt = parseInt(lifeTotal, 10);
  var lifeTotalAsInt = lifeTotalAsInt+1;
  $("#player1LifeTotal").text(lifeTotalAsInt);
});

$("#minusButton1P2").click(function(){
  var lifeTotal = ($("#player2LifeTotal").text());
  var lifeTotalAsInt = parseInt(lifeTotal, 10);
  var lifeTotalAsInt = lifeTotalAsInt-1;
  $("#player2LifeTotal").text(lifeTotalAsInt);
});

$("#plusButton1P2").click(function(){
  var lifeTotal = ($("#player2LifeTotal").text());
  var lifeTotalAsInt = parseInt(lifeTotal, 10);
  var lifeTotalAsInt = lifeTotalAsInt+1;
  $("#player2LifeTotal").text(lifeTotalAsInt);
});
