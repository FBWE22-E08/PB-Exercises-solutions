let i=1;let printHeading = () =>  console.log("Exercise " + i++);

// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.
printHeading();
const triplet = x => {
  console.log(x+x+x);
}
triplet("A");

// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"
printHeading();
const quintuplet = x => "" + x + x + x + x + x;
console.log(quintuplet("Cat"));

// 3. Write a function (multiStr) that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs `3` and "Woah" it should return `WoahWoahWoah`
printHeading();
const multiStr = (a, b) => {
  let out = "";
  for (let counter = 0; counter < a; counter++) {
    out += b;
  }
  return out;
}
console.log(multiStr(3, "Woah"));

// 4. Write a function (largestNumInArray) that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`
printHeading();
const largestNumInArray = x => {
  let max = null; // yeah this does not work if all the inputs are <0
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
}
console.log(largestNumInArray([1,6,83,91,0,-4,1337,5]));


// 5. This question has 2 parts
printHeading();
//   Part a) write a function (printIfDivisibleByTen) that takes in a number and returns the string `inputnumber + " is a multiple of 10!"` if the number is evenly divisable by 10. Examples:
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "10 is a multiple of 10!" 
// printIfDivisibleByTen(30) --> "30 is a multiple of 10!" 
// printIfDivisibleByTen(90000) --> "90000 is a multiple of 10!" 
const printIfDivisibleByTen = x => x%10===0 && console.log("Even 10!")

//   Part b) write a for-loop that runs 125 times, each time printing the function you created into the terminal with the current iteration number passed as an argument.
for (let counter = 0; counter <= 125; counter++) {
  printIfDivisibleByTen(counter);
}

// 6. Write an arrow function (largestNum) that takes in 5 numbers as its parameters and returns the largest one
printHeading();
const largestNum = (a,b,c,d,e) => Math.max(a,b,c,d,e);
console.log(largestNum(1,2,3,2,1));

// 7. Write an arrow function (isString) that takes in one parameter and returns true if that parameter is a string.
printHeading();
const isString = x => typeof x === "string";
console.log(isString("Cat"));
console.log(isString(Symbol("Wheeeee")));
console.log(isString(Number.EPSILON));

// 8. Write an arrow function (areStrings) that takes in two parameters and returns true if both of them are strings.
printHeading();
const areStrings = (a,b) => typeof a === typeof b && typeof b === typeof "";
console.log(areStrings("Cat"));
console.log(areStrings("Cat", "Cat"));
console.log(areStrings("Cat", Symbol("Wheeeee")));
console.log(areStrings("Cat", Number.EPSILON));

// 9. Write an arrow function (getFirstWord) that takes in one string. The function should return the first word in the string that was given to it. Examples:
// getFirstWord("Internetting is hard") --> "Internetting"
// getFirstWord("Hello World") --> "Hello"
// getFirstWord("Hello") --> "Hello"
printHeading();
const getFirstWord = x => x.split(" ")[0]
console.log(getFirstWord("Internetting is hard"));
console.log(getFirstWord("Hello World"));
console.log(getFirstWord("Hello"));

// 10. *hard!* Write an arrow function (wordRepeater) that takes in one string.
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
// wordRepeater("bunny") --> "bunny"
// wordRepeater("Cat food") --> "Cat Cat food food"
// wordRepeater("I am groot") --> "I I I am am am groot groot groot"
// wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"
printHeading();
const wordRepeater = x => {
  const words = x.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < words.length; j++) {
      result.push(word);
    }
  }
  return result.join(" ");
}
console.log(wordRepeater("bunny"));
console.log(wordRepeater("Cat food"));
console.log(wordRepeater("I am groot"));
console.log(wordRepeater("O M G ?"));

// 11. Write a short (single line) arrow function (firstLetter) that takes in one string and returns the first character of that string. Examples:
// firstLetter("cat") --> "c"
// firstLetter("quylthulg") --> "q"
printHeading();
const firstLetter = x => x[0]
console.log(firstLetter("cat"));
console.log(firstLetter("quylthulg"));

// 12. Write an arrow function (firstLetters) that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
// firstLetters("cat") --> "c"
// firstLetters("What the fruit") --> "Wtf"
// firstLetters("MongoDB Express Node React") --> "MERN"
// firstLetters("What You See Is What You Get") --> "WYSIWYG"
printHeading();
const firstLetters = x => {
  const arr = x.split(" ");
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += arr[i][0];
  }
  return out;
}
console.log(firstLetters("cat"));
console.log(firstLetters("What the fruit"));
console.log(firstLetters("MongoDB Express Node React"));
console.log(firstLetters("What You See Is What You Get"));

// 13. Write an arrow function (len) that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array.
printHeading();
const len = x => x.length? x.length : null;
console.log(len("xx"));
console.log(len("x"));
console.log(len(""));
console.log(len([]));
console.log(len([1]));
console.log(len({}));

// 14. Write an arrow function (explode) that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
// explode("Cat") --> ["C", "a", "t"]
// explode(41) --> null
// explode("") --> []
// explode("R & D") --> ["R", " ", "&", " ", "D"]
printHeading();
const explode = x => typeof x.split === "function" ? x.split('') : null;
console.log(explode("Cat"));
console.log(explode(41));
console.log(explode(""));
console.log(explode("R & D"));

// 15. Reverse engineering challenge 1. Write a function that does this:
// foo("") -> false
// foo("a") -> false
// foo("o") -> true
// foo("Cat") -> false
// foo("Tomato") -> true
// foo("Potato") -> true
// foo("Blanket") -> false
// foo("1") -> false
// *BONUS* Write it as a short (one line) arrow function
printHeading();
const foo = x => x[x.length-1] === "o"
console.log(foo(""));
console.log(foo("a"));
console.log(foo("o"));
console.log(foo("Cat"));
console.log(foo("Bravo"));
console.log(foo("Potato"));
console.log(foo("Blanket"));
console.log(foo("1"));

// 16. Reverse engineering challenge 2. Write a function that does this:
// bar("") --> "Cat"
// bar("x") --> "Cat"
// bar("Cat") --> "Catt"
// bar("Foobar") --> "Catobar"
// bar("Potato") --> "Cattato"
// bar("Tomato") --> "Catmato"
// bar("International Space Station") --> "Catternationakl Space Station"
// *BONUS* Write it as a short (one line) arrow function
printHeading();
let bar = x => "Cat" + x.substring(2);
console.log(bar(""));
console.log(bar("x"));
console.log(bar("Cat"));
console.log(bar("Foobar"));
console.log(bar("Potato"));
console.log(bar("Tomato"));
console.log(bar("International Space Station"));
