describe('Q3: percentage of 17/30', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,3) === 'Q3:');
        if (answer) {
            expect(answer.join(' ')).toContain('56.666');
        } else {
            fail();
        }
    })
})
