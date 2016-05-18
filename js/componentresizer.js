var lifeHeight = $(document).height()- $("#buttonBar").height() - $("#playersInfo").height() - 120 - $("#plusButton1P1").height() - $("#plusButton1P1").height()- $("#navbarMTG").height();
$(".singleLifeContainer").height(lifeHeight);
$("#player1InfectDamage").css({"height":($(".playerLifeCounter").height()+"px")}).css({"width":($(".col-md-1").width()+"px")});
$("#player2InfectDamage").css({"height":($(".playerLifeCounter").height()+"px")}).css({"width":($(".col-md-1").width()+"px")});
$("#p1Roll").hide();
$("#p2Roll").hide();
$(".life").css({"font-size":((lifeHeight * 85)/100)+"px"});
$("#timerButton").css({"font-size":($("#player1Rounds").height()+"px")});
