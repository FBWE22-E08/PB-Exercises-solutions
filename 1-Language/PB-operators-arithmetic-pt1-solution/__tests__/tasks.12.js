describe('Q12: minimum percentage to get the first class', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,4) === 'Q12:');
        if (answer) {
            expect(answer.join(' ')).toContain('96');
        } else {
            fail();
        }
    })
})
