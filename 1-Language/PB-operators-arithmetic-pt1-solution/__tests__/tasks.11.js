describe('Q11: students score', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,4) === 'Q11:');
        if (answer) {
            expect(answer.join(' ')).toContain('90');
        } else {
            fail();
        }
    })
})
