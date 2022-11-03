describe('Q10: hours worked per day', () => {
    test(`Correct result is printed in the terminal`, () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,4) === 'Q10:');
        if (answer) {
            expect(answer.join(' ')).toContain('5.85');
        } else {
            fail();
        }
    })
})
