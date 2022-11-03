describe('Q7: area of a right-angled triangle', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,3) === 'Q7:');
        if (answer) {
            expect(answer.join(' ')).toContain('6');
        } else {
            fail();
        }
    })
})
