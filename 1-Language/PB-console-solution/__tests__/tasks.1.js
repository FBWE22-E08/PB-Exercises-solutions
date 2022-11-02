beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('1. Console output', () => {
    test('console should print "This is an exercise in console logging"', () => {
        const solution = require('../solution');
        const expected = /^This is an exercise in console logging$|^This is an exercise in console logging\.$/i
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(expected));
    })
})
