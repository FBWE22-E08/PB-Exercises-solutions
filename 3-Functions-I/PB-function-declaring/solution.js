// 1
function multiply(a, b) {
  console.log(a * b);
}

multiply(7, 5);

// 2
const myMultiply = function(a, b) {
  console.log(a * b);
};

myMultiply(21, 3);


// 3 
const myMultiplyFunc = (a, b) => console.log(a * b);
myMultiplyFunc(4, 31)

// 4
// function declaration
function remainderOfDivision1(a, b) {
    console.log(a % b);
}

remainderOfDivision1(23, 5);

// function declaration as value
const remainderOfDivision2 = function(a, b) {
    console.log(a % b);
}

remainderOfDivision2(11, 3);

// arrow function 
const remainderOfDivision3 = (a, b) => console.log(a % b);
remainderOfDivision3(125, 10);

