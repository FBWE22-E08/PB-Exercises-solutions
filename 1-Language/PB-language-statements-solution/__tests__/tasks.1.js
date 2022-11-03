beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))


describe('2. Printing "Hello World"', () => {
    test('The phrase "Hello World" is printed in the terminal', () => {

        const solution = require('../solution');
         expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Hello world/i));

    })
})

describe('3. Printing "This is my first js file"', () => {
    test('The phrase "This is my first js file" is printed in the terminal', () => {

        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/This is my first js file/i));

    })
})

