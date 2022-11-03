const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/[ ()]/g, "");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("0. Variables", () => {
  test("`apples` variable is defined", () => {
    const solution = rewire("../solution");
    const apples = solution.__get__("apples");
    expect(apples).toBeDefined();
  });
  test("`apples` variable has value `20`", () => {
    const solution = rewire("../solution");
    const apples = solution.__get__("apples");
    expect(apples).toEqual(20);
  });
  test("`oranges` variable is defined", () => {
    const solution = rewire("../solution");
    const oranges = solution.__get__("oranges");
    expect(oranges).toBeDefined();
  });
  test("`oranges` variable has value `30`", () => {
    const solution = rewire("../solution");
    const oranges = solution.__get__("oranges");
    expect(oranges).toEqual(30);
  });
})

describe("1. Equality", () => {
  test("`apples` and `oranges` are compared", () => {
    expect(
      content.includes("apples==oranges") ||
      content.includes("apples===oranges") ||
      content.includes("oranges==apples") ||
      content.includes("oranges===apples")
    ).toBeTruthy();
  })
})

describe("2. Inequality", () => {
  test("`apples` and `oranges` are checked for ineqality", () => {
    expect(
      content.includes("apples!=oranges") ||
      content.includes("apples!==oranges") ||
      content.includes("oranges!=apples") ||
      content.includes("oranges!==apples")
    ).toBeTruthy();
  })
})

describe("3. Greater than", () => {
  test("Checking whether `apples` is greater than `oranges`", () => {
    expect(content.includes("apples>oranges")).toBeTruthy();
  })
})

describe("4. Less than or equal", () => {
  test("Checking whether `apples` is less than or equal to `oranges`", () => {
    expect(content.includes("apples<=oranges")).toBeTruthy();
  })
})

describe("5. Greater than", () => {
  test("Checking whether `oranges` is greater than `apples`", () => {
    expect(content.includes("oranges>apples")).toBeTruthy();
  })
})

describe("6. Mangoes", () => {
  test("`mangoes` variable is defined", () => {
    const solution = rewire("../solution");
    const mangoes = solution.__get__("mangoes");
    expect(mangoes).toBeDefined();
  });
  test("`mangoes` variable has value `5`", () => {
    const solution = rewire("../solution");
    const mangoes = solution.__get__("mangoes");
    expect(mangoes).toEqual(5);
  });
  test("`mangoes` is multiplied by `apples`", () => {
    expect(
      content.includes("mangoes*apples") ||
      content.includes("apples*mangoes")
    ).toBeTruthy()
  });
  test("Checking if result is greater than `mangoes` added to `oranges`", () => {
    expect(
      content.includes("mangoes*apples>mangoes+oranges") ||
      content.includes("mangoes*apples>oranges+mangoes") ||
      content.includes("apples*mangoes>mangoes+oranges") ||
      content.includes("apples*mangoes>oranges+mangoes")
    ).toBeTruthy()
  });
})

describe("7. Greater than", () => {
  test("`mangoes` are subtracted from `apples`", () => {
    expect(content.includes("apples-mangoes")).toBeTruthy();
  })
  test("`oranges` are divided by `mangoes`", () => {
    expect(content.includes("oranges/mangoes")).toBeTruthy();
  })
  test("both results are compared", () => {
    expect(content.includes("apples-mangoes<oranges/mangoes")).toBeTruthy();
  })
})

describe("8. Equality", () => {
  test("`mangoes`, `apples` and `oranges` are checked for equality", () => {
    let content2 = content.replace(/apples|oranges|mangoes/g, "unit");
    expect(
      content2.includes("unit==unit?unit==unit:false") ||
      content2.includes("unit===unit?unit===unit:false")
    ).toBeTruthy();
  })
})

describe("9. Remainder", () => {
  test("9. Checking whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal", () => {
    expect(
      content.includes("apples%mangoes==oranges%mangoes") ||
      content.includes("apples%mangoes===oranges%mangoes")
    ).toBeTruthy();
  });
})

describe("10. Comparison Operators", () => {
  test("comparison between mangoes added to apples and oranges minus mangoes is made", () => {
    expect(
      content.includes("mangoes+apples>oranges-mangoes") ||
      content.includes("apples+mangoes>oranges-mangoes")
    ).toBeTruthy();
  })
  test("comarison operator is modified to give result of 'true'", () => {
    expect(
      content.includes("mangoes+apples>=oranges-mangoes") ||
      content.includes("apples+mangoes>=oranges-mangoes") ||
      content.includes("mangoes+apples<=oranges-mangoes") ||
      content.includes("apples+mangoes<=oranges-mangoes") ||
      content.includes("apples+mangoes==oranges-mangoes") ||
      content.includes("mangoes+apples==oranges-mangoes") ||
      content.includes("apples+mangoes===oranges-mangoes")||
      content.includes("mangoes+apples===oranges-mangoes")
    ).toBeTruthy();
  })
})
