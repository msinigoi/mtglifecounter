$("#rollButton").click(function() {
  var p1Roll = Math.floor((Math.random() * 100));
  var p2Roll = Math.floor((Math.random() * 100));
  var input = this;
      input.disabled = true;
  $("#p1Roll").removeClass("btn-danger btn-success");
  $("#p2Roll").removeClass("btn-danger btn-success");
  if (p1Roll > p2Roll) {
    $("#p1Roll").addClass("btn-success");
    $("#p2Roll").addClass("btn-danger");
  } else if (p2Roll > p1Roll) {
    $("#p2Roll").addClass("btn-success");
    $("#p1Roll").addClass("btn-danger");
  } else {
    $("#p2Roll").addClass("btn-warning");
    $("#p1Roll").addClass("btn-warning");
  }
  $("#p1Roll").show();
  $("#p2Roll").show();
  if (p1Roll < 10) {
    $("#p1Roll").text("0" + p1Roll).css("font-weight","Bold");
  } else {
    $("#p1Roll").text(p1Roll).css("font-weight","Bold");
  }
  if (p2Roll < 10) {
    $("#p2Roll").text("0" + p2Roll).css("font-weight","Bold");
  } else {
    $("#p2Roll").text(p2Roll).css("font-weight","Bold");
  }
  $("#p1Roll").delay(5000).fadeOut("fast");
  $("#p2Roll").delay(5000).fadeOut("fast");
  setTimeout(function() {
      input.disabled = false;
  }, 5000);
});
