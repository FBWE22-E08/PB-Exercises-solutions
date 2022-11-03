describe('Q2: How much does Sylvia make every year?', () => {
    test('Correct result is printed in the terminal', () => {
        console.log = jest.fn();
        const solution = require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0,3) === 'Q2:');
        if (answer) {
            expect(answer.join(' ')).toContain('26000');
        } else {
            fail();
        }
    })
})
