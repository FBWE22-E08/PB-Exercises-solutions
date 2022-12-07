const rewire = require("rewire");

describe("Solution file", () => {
  test("`index.js` exists", async () => {
    const fs = require('fs');
    const dir = fs.readFileSync(__dirname + "/../index.js", "utf8");
    expect(dir).toBeTruthy();
  });
})
describe("Closure", () => {
  test("`createBase` function should return function pre-configured with passed base number", () => {
    const createBase = rewire("../index").__get__("createBase");
    const addSix = createBase(6);
    expect(addSix(10)).toEqual(16);
  })
})