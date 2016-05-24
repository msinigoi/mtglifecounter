$("#player1InfectDamage").click(function(){
  var infectDamage = ($("#player1InfectDamage").text());
  var infectDamageAsInt = parseInt(infectDamage, 10);
  var infectDamageAsInt = infectDamageAsInt+1;
  $("#player1InfectDamage").text(infectDamageAsInt);
  $("#player1InfectDamage").css("font-weight", "bold");
});

$("#player2InfectDamage").click(function(){
  var infectDamage = ($("#player2InfectDamage").text());
  var infectDamageAsInt = parseInt(infectDamage, 10);
  var infectDamageAsInt = infectDamageAsInt+1;
  $("#player2InfectDamage").text(infectDamageAsInt);
  $("#player2InfectDamage").css("font-weight", "bold");
});
