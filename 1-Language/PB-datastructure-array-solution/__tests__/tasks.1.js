const rewire = require("rewire")


beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('1. Array', () => {
    test('`myArray` variable exists', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      expect(myArray).toBeDefined()
    })
    test('`myArray` is Array', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      expect(Array.isArray(myArray)).toBe(true)
    })
    test('`myArray` has 5 items', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      expect(myArray.length).toBe(5)
    })
    test('`myArray` is logged', () => {
      const solution = rewire("../solution")
      const myArray = solution.__get__("myArray")
      require('../solution');
      expect(consoleSpy).toHaveBeenCalledWith(myArray);
    })
})