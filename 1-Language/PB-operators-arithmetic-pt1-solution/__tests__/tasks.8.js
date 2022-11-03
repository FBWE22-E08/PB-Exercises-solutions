describe('Q8: volume of a cube', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,3) === 'Q8:');
        if (answer) {
            expect(answer.join(' ')).toContain('729');
        } else {
            fail();
        }
    })
})
