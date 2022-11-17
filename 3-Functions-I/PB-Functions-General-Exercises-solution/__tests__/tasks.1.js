const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. triplet", () => {
  test("`triplet` function exists", () => {
    const solution = rewire("../solution");
    const triplet = solution.__get__("triplet");
    expect(triplet).toBeDefined();
  });
  test("function takes a parameter and logs it 3 times to console", () => {
    const solution = rewire('../solution')
    const logMock = jest.fn();
    solution.__set__('console', {
        log: logMock,
    });
    const triplet = solution.__get__("triplet");
    triplet("A")
    expect(logMock).toHaveBeenCalledWith("AAA")
  });
});
describe("2. quintuplet", () => {
  test("`quintuplet` function exists", () => {
    const solution = rewire("../solution");
    const quintuplet = solution.__get__("quintuplet");
    expect(quintuplet).toBeDefined();
  });
  test("function returns argument value repeated 5 times", () => {
    const solution = rewire("../solution");
    const quintuplet = solution.__get__("quintuplet");
    expect(quintuplet('Cat')).toBe("CatCatCatCatCat");
  });
});
describe("3. multiStr", () => {
  test("`multiStr` function exists", () => {
    const solution = rewire("../solution");
    const multiStr = solution.__get__("multiStr");
    expect(multiStr).toBeDefined();
  });
  test("function returns second argument repeated as many times as defined by first argument ", () => {
    const solution = rewire("../solution");
    const multiStr = solution.__get__("multiStr");
    expect(multiStr(4,'Hat')).toBe("HatHatHatHat");
  });
});
describe("4. largestNumInArray", () => {
  test("`largestNumInArray` function exists", () => {
    const solution = rewire("../solution");
    const largestNumInArray = solution.__get__("largestNumInArray");
    expect(largestNumInArray).toBeDefined();
  });
  test("function returns largest number from provided array", () => {
    const solution = rewire("../solution");
    const largestNumInArray = solution.__get__("largestNumInArray");
    expect(largestNumInArray([1,2,3,4,5])).toBe(5);
  });
});
describe("5. printIfDivisibleByTen", () => {
  test("`printIfDivisibleByTen` function exists", () => {
    const solution = rewire("../solution");
    const printIfDivisibleByTen = solution.__get__("printIfDivisibleByTen");
    expect(printIfDivisibleByTen).toBeDefined();
  });

  test("function takes a number as argument and prints 'Even 10!' if passed number is evenly divisible by 10", () => {
    const solution = rewire("../solution");
    const logMock = jest.fn();
    solution.__set__('console', {
        log: logMock,
    });
    const printIfDivisibleByTen = solution.__get__("printIfDivisibleByTen");
    printIfDivisibleByTen(10);
    expect(logMock).toHaveBeenCalledWith('Even 10!')
  });

  test("Function is called 125 times in a loop", () => {
    require("../solution")
    expect(consoleSpy.mock.calls.join('').match(/Even 10!/g).length).toBeGreaterThanOrEqual(13)
  });
});
describe("6. largestNum", () => {
  test("`largestNum` function exists", () => {
    const solution = rewire("../solution");
    const largestNum = solution.__get__("largestNum");
    expect(largestNum).toBeDefined();
  });
  test("function takes 5 numbers as arguments and returns largest one", () => {
    const solution = rewire("../solution");
    const largestNum = solution.__get__("largestNum");
    expect(largestNum(1,2,3,4,5)).toBe(5);
  });
});
describe("7. isString", () => {
  test("`isString` function exists", () => {
    const solution = rewire("../solution");
    const isString = solution.__get__("isString");
    expect(isString).toBeDefined();
  });
  test("function returns `true` if passed a string", () => {
    const solution = rewire("../solution");
    const isString = solution.__get__("isString");
    expect(isString('hi')).toBeTruthy();
  });
  test("function doesn't return `true` if passed anything other than a string", () => {
    const solution = rewire("../solution");
    const isString = solution.__get__("isString");
    expect(isString(5)).toBeFalsy();
  });
});
describe("8. areStrings", () => {
  test("`areStrings` function exists", () => {
    const solution = rewire("../solution");
    const areStrings = solution.__get__("areStrings");
    expect(areStrings).toBeDefined();
  });
  test("function returns `true` if both passed arguments are strings", () => {
    const solution = rewire("../solution");
    const areStrings = solution.__get__("areStrings");
    expect(areStrings('hi','world')).toBeTruthy();
  });
  test("function doesn't return `true` if at least one passed argument is not a string", () => {
    const solution = rewire("../solution");
    const areStrings = solution.__get__("areStrings");
    expect(areStrings('hi', 5)).toBeFalsy();
  });
});
describe("9. getFirstWord", () => {
  test("`getFirstWord` function exists", () => {
    const solution = rewire("../solution");
    const getFirstWord = solution.__get__("getFirstWord");
    expect(getFirstWord).toBeDefined();
  });
  test("function returns first word of passed string", () => {
    const solution = rewire("../solution");
    const getFirstWord = solution.__get__("getFirstWord");
    expect(getFirstWord('hi world')).toBe('hi');
  });
});
describe("10. wordRepeater", () => {
  test("`wordRepeater` function exists", () => {
    const solution = rewire("../solution");
    const wordRepeater = solution.__get__("wordRepeater");
    expect(wordRepeater).toBeDefined();
  });
  test("function returns string with words from original string repeated as many times as number of words in original string", () => {
    const solution = rewire("../solution");
    const wordRepeater = solution.__get__("wordRepeater");
    expect(wordRepeater('hi world')).toBe('hi hi world world');
  });
});
describe("11. firstLetter", () => {
  test("`firstLetter` function exists", () => {
    const solution = rewire("../solution");
    const firstLetter = solution.__get__("firstLetter");
    expect(firstLetter).toBeDefined();
  });
  test("function returns first character of passed string", () => {
    const solution = rewire("../solution");
    const firstLetter = solution.__get__("firstLetter");
    expect(firstLetter('hi world')).toBe('h');
  });
});
describe("12. firstLetters", () => {
  test("`firstLetters` function exists", () => {
    const solution = rewire("../solution");
    const firstLetters = solution.__get__("firstLetters");
    expect(firstLetters).toBeDefined();
  });
  test("function returns string made up of first letter of each word in passed string", () => {
    const solution = rewire("../solution");
    const firstLetters = solution.__get__("firstLetters");
    expect(firstLetters('hi world')).toBe('hw');
  });
});
describe("13. len", () => {
  test("`len` function exists", () => {
    const solution = rewire("../solution");
    const len = solution.__get__("len");
    expect(len).toBeDefined();
  });
  test("function returns length if passed a string or an array", () => {
    const solution = rewire("../solution");
    const len = solution.__get__("len");
    expect(len('hi world')).toBe(8);
  });
  test("function returns `null` if passed anyting other than string or array", () => {
    const solution = rewire("../solution");
    const len = solution.__get__("len");
    expect(len(1)).toBe(null);
  });
});
describe("14. explode", () => {
  test("`explode` function exists", () => {
    const solution = rewire("../solution");
    const explode = solution.__get__("explode");
    expect(explode).toBeDefined();
  });
  test("function returns characters of passed string as array", () => {
    const solution = rewire("../solution");
    const explode = solution.__get__("explode");
    expect(explode('hi world')).toEqual('hi world'.split(''));
  });
  test("`function returns `null` is passed anything other than a string", () => {
    const solution = rewire("../solution");
    const explode = solution.__get__("explode");
    expect(explode(1)).toBe(null);
  });
});
describe("15. reverse engineering 1", () => {
  test("`foo` function exists", () => {
    const solution = rewire("../solution");
    const foo = solution.__get__("foo");
    expect(foo).toBeDefined();
  });
  test("function returns `false` if passed the string 'hi world'", () => {
    const solution = rewire("../solution");
    const foo = solution.__get__("foo");
    expect(foo('hi world')).toBe(false);
  });
  test("function returns `true` if passed the string 'hi worldo'", () => {
    const solution = rewire("../solution");
    const foo = solution.__get__("foo");
    expect(foo('hi worldo')).toBeTruthy();
  });
});
describe("16. reverse engineering 2", () => {
  test("`bar` function exists", () => {
    const solution = rewire("../solution");
    const bar = solution.__get__("bar");
    expect(bar).toBeDefined();
  });
  test("function returns 'Cat world' if passed the string 'hi world'", () => {
    const solution = rewire("../solution");
    const bar = solution.__get__("bar");
    expect(bar('hi world')).toBe('Cat world');
  });
});
