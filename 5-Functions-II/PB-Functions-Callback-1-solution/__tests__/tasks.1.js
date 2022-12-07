const rewire = require("rewire");

describe("Greet Message", () => {
  
  test("`greetMessage` function should be defined", () => {
    const solution = rewire("../solution.js");
    const greetMessage = solution.__get__("greetMessage");
    expect(greetMessage).toBeDefined();
  });

  test("`greetMessage` should accept a `string` as a argument and print a greeting message to console", () => {
    const solution = rewire("../solution");
    const greetMessage = solution.__get__("greetMessage");
    const logMock = jest.fn();
    solution.__set__('console', {
        log: logMock,
    });
    greetMessage("Mark");
    expect(logMock).toHaveBeenCalledWith(
      expect.stringMatching(/Good Morning, Mark/i)
    );
  });
});

describe('greetUsers', () => {

  test('`greetUsers` should be defined', () => {
    const solution = rewire('../solution.js');
    const greetUsers = solution.__get__('greetUsers');
    expect(greetUsers).toBeDefined();
  });

  test("`greetUsers` should accept an array of users and a callback function and greet each user from array", () => {
    const solution = rewire("../solution");
    const greetUsers = solution.__get__("greetUsers");
    const greetMessage = solution.__get__("greetMessage");
    const logMock = jest.fn();
    solution.__set__('console', {
        log: logMock,
    });
    greetUsers(["Leon", "Susan", "Julian"], greetMessage);
    expect(logMock).toHaveBeenCalledWith(
      expect.stringMatching(/Good Morning, Julian/i),
    );
    expect(logMock).toHaveBeenCalledWith(
      expect.stringMatching(/Good Morning, Leon/i),
    );
    expect(logMock).toHaveBeenCalledWith(
      expect.stringMatching(/Good Morning, Susan/i),
    );
  });
});