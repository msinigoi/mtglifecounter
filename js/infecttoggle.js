$("#infectButton").click(function(){
  var colWidth = $(".col-md-1").width()+"px";
  if ($(this).hasClass("infectButtonOFF")) {
    $(this).removeClass("infectButtonOFF").addClass("active infectButtonON").addClass("btn-warning");

    $("#lifeCounter1").animate({
      "marginLeft" :"+="+ $(".col-md-1").width()/2+"px"
    });
    $("#lifeCounter2").animate({
      "marginLeft" :"-="+ $(".col-md-1").width()+"px"
    });
    $("#player1InfectDamage").delay(500).show(0);
    $("#player2InfectDamage").delay(500).show(0);
  } else if ($(this).hasClass("infectButtonON")) {
    $(this).removeClass("active infectButtonON").addClass("infectButtonOFF").removeClass("btn-warning");
    $("#player1InfectDamage").hide();
    $("#player2InfectDamage").hide();
    $("#lifeCounter1").animate({
      "marginLeft" :"-="+ $(".col-md-1").width()/2+"px"
    });
    $("#lifeCounter2").animate({
      "marginLeft" :"+="+ $(".col-md-1").width()+"px"
    });
  };
});
