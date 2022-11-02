const rewire = require("rewire")
const solution = rewire("../solution")


beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('2. Variables', () => {
    test('variable "exercise" should exist', () => {
        const exercise = solution.__get__("exercise")
        expect(exercise).toBeDefined()
    })
    test('variable "exercise" should have string value', () => {
        const exercise = solution.__get__("exercise")
        expect(typeof exercise).toBe("string")
    })
    test('variable "exercise" is logged', () => {
        const solution = require('../solution');
        const expected = /^This is the value$|^This is the value\.$/i
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(expected));
    })
})
