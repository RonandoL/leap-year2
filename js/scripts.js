// Business Logic
var leapYear = function(year) {
  console.log(year);
  if (year === "") {  //(year === "")
    return "Please just enter a number bitch!";
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else if (isNaN(year)) {
    return "Please just enter a number bitch!";
  } else if (year <=0) {
    return "input positive integer";
  } else {
    return false;
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#yourYear").submit(function(event) {
    var year = parseInt($("input#leapYear").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("NOT");
    } else {
      $(".not").text("");
    }

    $(".results").show();

    event.preventDefault();
  });

});
