// Business Logic: is it a leap year or not or is it NaN or a negative number?
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else if (isNaN(year)) {  // Error handling: if entry is not a number
    return "NaN";
  } else if (year <= 0) {  // Error handling: if entry is a negative number
    return "negativeNumber";
  } else {
    return false;
  }
};

// User Interface Logic:
$(document).ready(function() {
  $("form#yourYear").submit(function(event) {
    var year = parseInt($("input#leapYear").val());  // Grab value of user input
    var result = leapYear(year);   // Result is the function running user input

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
