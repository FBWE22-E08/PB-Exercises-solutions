const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("Square Number", () => {
  test("`squareNumber` function takes one number as parameter and returns the square", () => {
    const solution = rewire("../solution");
    const squareNumber = solution.__get__("squareNumber");
    expect(squareNumber).toBeDefined();
    expect(squareNumber(5)).toEqual(25);
  });
});

describe("Square All", () => {
  test("`square` function takes 2 parameters: an array of numbers and a callback function. It returns an array with the square of each number from passed array", () => {
    const solution = rewire("../solution");
    const squareNumber = solution.__get__("squareNumber");
    const square = solution.__get__("square");
    expect(square).toBeDefined();
    expect(square([2,3,4,5],squareNumber)).toEqual([4,9,16,25]);
  });
});
