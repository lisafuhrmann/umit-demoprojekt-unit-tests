const expect = require("chai").expect;

//Sample JUnit test
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

describe("#sum()", function () {
  //  if needed logic before each test run
  beforeEach(function () {});

  // test a functionality
  it("should add numbers", function () {
    expect(sum([1, 2, 3, 4, 5])).to.equal(15);
  });

  // Test with empty array
  it("should return 0 for empty array", function () {
    expect(sum([])).to.equal(0);
  });

  // Test with negative numbers
  it("should handle negative numbers", function () {
    expect(sum([-1, -2, -3])).to.equal(-6);
  });

  // Test with mixed numbers
  it("should handle positive and negative numbers", function () {
    expect(sum([10, -5, 3, -2])).to.equal(6);
  });

  // Test with single element
  it("should handle single element array", function () {
    expect(sum([42])).to.equal(42);
  });
});
