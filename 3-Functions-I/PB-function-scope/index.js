function printExponentialValues(x, y) {
    if ((typeof x !== "number") || (typeof y !== "number")) {
        console.log("x or y is not a number");
    }
    let exponentResult = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
            exponentResult *= x;
            values += `${exponentResult} `;
        }
    console.log(values);
}

printExponentialValues(3,5);


 let fruit = "banana"

 function printFavoriteFruit() {
     fruit = "watermelon"
    console.log("My favorite fruit is: " + fruit);
 }

 printFavoriteFruit()

const exponent = (num1, num2) => {
    for (let i = 1; i <= num2; i++) {
        let result = Math.pow(num1, i);
        console.log(`${num1} ^ ${i} is ${result}`);
    }
};
//console.log(result);

exponent(2, 8);
