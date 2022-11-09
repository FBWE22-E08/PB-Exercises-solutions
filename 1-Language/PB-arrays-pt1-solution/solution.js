//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
const secondCity = euroCities[1];
console.log(secondCity);

//2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);

//3. Print the length of the array "euroCities".
console.log(euroCities.length);

//4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);

//5. Use an array method to add "Budapest" to the end of euroCities array.
euroCities.push("Budapest");
console.log(euroCities);

//6. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];

//7. Use a method to combine euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);

//8. Reverse the order of worldCities.
console.log(worldCities.reverse());

//9. Bonus: Remove the third item from the euroCities array.
euroCities.splice(2, 1);
console.log(euroCities);

//Bonus: 10. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
const citiesArr = asianCities.slice(1, 4);
console.log(citiesArr);

//Bonus: 11. Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);

//Bonus: 12. Insert "Washington" at the 2nd position of worldCities array, without removing any other elements.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

//Bonus: 13. Write a program to join all elements of the result (worldCities) into a string.
console.log(worldCities.join(", "));
console.log(worldCities.join(" + "));

//Extra Bonus

//Reverse String
const string = "Hello World";
strToArr = string.split("");
strToArr.reverse();
const reversedString = strToArr.join("");
console.log(reversedString);

// // EXTRA PRACTICE

// //1. Make an array of your siblings' names or your favorite movie characters' names.
// const family = ["Miriam", "John", "Erika", "Julian"];

// //2. Make an array of your parents' names.
// const parents = ["Yasmin", "Adrian"];

// //3. Combine these two arrays.
// const wholeFamily = family.concat(parents);
// console.log(wholeFamily);

// //4. Add your pets' names.
// wholeFamily.push("Toby");
// console.log(wholeFamily);

// //5. Reverse the order of the array.
// wholeFamily.reverse();
// console.log(wholeFamily);

// //6. Access one of your parents' names.
// let mother = wholeFamily[2];
// console.log(mother);

// //7. Update the name of one of your parents.
// mother = "Yasmin Borg";
// console.log(mother);

// wholeFamily[1] = "Adrian Borg";
// console.log(wholeFamily);
