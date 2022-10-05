/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

// 1. String - these are characters that are in quotation marks or backticks, usually means written values
// 2. Number - this is for storing ordinary numbers written in numerical form
// 3. Boolean - these are a true/false type of data
// 4. Undefined - this is the default value every variable has before you assign a value to it.
// 5. Null - this measn that the variable is completely empty, and contains no value.
// 6. NaN - meaning Not a Number - a data type that appears when you try to do a math operation on a value that is not a number, for example on a string type.
// 7. BigInt - this is also a data type which is used to store numerical data above a ceratin threshold.

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

// A variable is a piece of data that can be manipulated. It can be given a value that can be changed later on.

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

// 12 + 20
// console.log(12 + 20)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

// let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

// let name = `John Doe`

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

// x - 12
// console.log(x - 12)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

// let name1 = `john`
// let name2 = `John`

// console.log(name1 === name2)

// let johnLowerCase = name2.toLowerCase()

// console.log(name1 === johnLowerCase)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

// let x = 6
// if (x === 6) {
//   console.log(`six`)
// } else if (x === 1) {
//   console.log(`one`)
// } else if (x === 2) {
//   console.log(`two`)
// } else if (x === 3) {
//   console.log(`three`)
// } else if (x === 4) {
//   console.log(`four`)
// } else if (x === 5) {
//   console.log(`five`)
// } else if (x === 7) {
//   console.log(`seven`)
// } else if (x === 8) {
//   console.log(`eight`)
// } else if (x === 9) {
//   console.log(`nine`)
// } else {
//   console.log(`number is not smaller than 10`)
// }

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

// let favouriteKDrama = `Vincenzo`
// let approval = `You have good taste!`
// let disapproval = `Girl, fix up`
// vibeCheck = favouriteKDrama === `Vincenzo` ? approval : disapproval

// console.log(vibeCheck)
