describe('leapYear', function() {

  it("is false for a year that is not divisible by 4, 100 and 400", function(){
    expect(leapYear(1973)).to.equal(false);
  });

  it("it is true for a year that is divisible by 4", function(){
    expect(leapYear(2012)).to.equal(true);
  });

  it("it is false for a year that is divisible by 100", function(){
    expect(leapYear(1900)).to.equal(false);
  });

  it("it is true for a year that is divible by 400", function(){
    expect(leapYear(2000)).to.equal(true);
  });

  it("it returns message in browser encouraging user to enter positive number only", function(){
    expect(leapYear("hello")).to.equal("Please just enter a number bitch!");
  });

  it("it returns message prompting integer when user inputs negative number", function(){
    expect(leapYear(-45)).to.equal("input positive integer");
  });

});
