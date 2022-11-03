describe('Q5: perimeter of a triangle', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,3) === 'Q5:');
        if (answer) {
            expect(answer.join(' ')).toContain('18');
        } else {
            fail();
        }
    })
})