//***ARITHMETIC OPERATORS***

//0. Declare two variables "snackServings" and "guests" and assign them number values.

const snackServings = 20;
const guests = 30;

//1. Add snackServings and guests, and print the result to the console.

console.log(snackServings + guests);

//2. Subtract guests from snackServings, and print the result to the console. Then, subtract snackServings from guests and print the result to the console.

console.log(snackServings - guests);
console.log(guests - snackServings);

//3. Multiply snackServings and guests, and print the result to the console.

console.log(snackServings * guests);

//4. Divide snackServings and guests, and print the result to the console.

console.log(snackServings/guests);

//5. Declare another variable "drinks" with the value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne".

const drinks = 10;
const resultOne = (snackServings * guests) / drinks;
console.log(resultOne);

//6. Declare two variables "monkeys" with the value of 15 and "bananas" with the value of 9. Print the remainder when monkeys is divided by bananas.

let monkeys = 15;
let bananas = 9;
console.log(monkeys / bananas);

//7. Declare another variable "monkeyfights" with the value of 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo". Print "resultTwo" to the console.

const monkeyfights = 20;
const resultTwo = (monkeys + bananas) * monkeyfights;
console.log(resultTwo);

//8. Increment monkeyBusiness. Print the result to the console.
let monkeyBusiness = 90
console.log(++monkeyBusiness);

//9. Decrement boredom. Print the result to the console.result
let boredom = 13
console.log(--boredom);

//10. Subtract bananas from monkeys and store this in a new variable "happiness". Add happiness and monkeyfights.

const happiness = monkeys - bananas;
console.log(happiness + monkeyfights);

//11. Print the remainder when resultOne is divided by resultTwo to the console.

console.log(resultOne % resultTwo);
