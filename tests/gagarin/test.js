describe("simple gagarin test", function() {
  var app = meteor({flavor: "fiber"});
  it("should be passed", function() {
    var thisIs9 = 9;
    var thisIs1 = 1
    var value = app.execute(function(val1, val2) {
      return val1 + val2;
    }, [thisIs9, thisIs1]);
    expect(value).to.equal(10);
  });
});
