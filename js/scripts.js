$(document).ready(function() {

  $(".languagebutton").click(function() {
    $(".languageQ").hide();
    $(".addressQ").show();
  });
  $(".addressbutton").click(function() {
    $(".addressQ").hide();
    $(".foodQ").show();
  });
  $(".foodbutton").click(function() {
    $(".foodQ").hide();
    $(".workQ").show();
  });
  $(".workbutton").click(function() {
    $(".workQ").hide();
    $(".movieQ").show();
  });
  $("form#javascript").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#language").val());
    var number2 = parseInt($("#address").val());
    var number3 = parseInt($("#food").val());
    var number4 = parseInt($("#work").val());
    var number5 = parseInt($("#movie").val());

    if (number1 + number2 + number3 + number4 + number5 <= 8) {
      $(".confirmation").show();
      $(".confirmation2").hide();
      $(".confirmation3").hide();
    } else if (number1 + number2 + number3 + number4 + number5 <= 12) {
      $(".confirmation2").show();
      $(".confirmation").hide();
      $(".confirmation3").hide();
    } else if (number1 + number2 + number3 + number4 + number5 >= 13) {
      $(".confirmation3").show();
      $(".confirmation").hide();
      $(".confirmation2").hide();
    }
  });
});
