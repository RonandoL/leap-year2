// Business Logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else if (isNaN(year)) {
    return "NaN";
  } else if (year <= 0) {
    return "negativeNumber";
  } else {
    return false;
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#yourYear").submit(function(event) {
    var year = parseInt($("input#leapYear").val());
    var result = leapYear(year);
console.log(result);
      if (result === "negativeNumber") {
      alert("Input positive integer.");
    } else if (result === "NaN") {
      alert("Please just enter a number bitch!");
    } else {

      $(".year").text(year);

        if (!result) {
          $(".not").text("NOT");
        } else {
          $(".not").text("");
        }
          $(".results").show();
      }


    event.preventDefault();
  });

});
