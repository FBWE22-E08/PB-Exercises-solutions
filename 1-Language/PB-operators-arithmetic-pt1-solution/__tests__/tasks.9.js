describe('Q9: three bills including tips', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,3) === 'Q9:');
        if (answer) {
            expect(
                answer.join(' ').includes('24.585') &&
                answer.join(' ').includes('30.67') &&
                answer.join(' ').includes('43.104') 
            ).toBe(true);
        } else {
            fail();
        }
    })
})
