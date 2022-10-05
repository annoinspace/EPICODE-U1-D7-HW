// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = false
gender = isMale === true ? `male` : `female`
console.log(gender)

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let a = 0
let b = 8
if (a == 8 || b === 8) {
  console.log(`One of the numbers is 8`)
}

if (a - b === 8) {
  console.log(`a - b = 8`)
} else if (b - a === 8) {
  console.log(`b - a = 8`)
} else {
  console.log(`The subtraction of numbers does not equal 8`)
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let word1 = `chocolate`
let word2 = `slipper`
let mushedWord = word1 + word2
console.log(mushedWord)

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let number1 = 56
let number2 = 999
let number3 = 12
let highTOLow = [number1, number2, number3]
highTOLow.sort((a, b) => b - a)
console.log(highTOLow)

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let average = (number1 + number2) / 2
console.log(average)

/* WRITE YOUR ANSWER HERE */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = `alsknvlskval`
let string2 = `lkfgnml`

let length1 = string1.length
let length2 = string2.length

if (length1 > length2) {
  console.log(string1 + ` is the longest word`)
} else {
  console.log(string2 + ` is the longest word`)
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let value = `randomWord`
console.log(Number.isInteger(value))

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let givenNumber = 350
let certainPercentage = 25
let percentage = (givenNumber / 100) * certainPercentage
console.log(certainPercentage + `% of ` + givenNumber + ` is ` + percentage)

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let numberToCheck = 16
let remainder = numberToCheck % 2
evenOrOdd = remainder === 0 ? `even` : `odd`
console.log(`${numberToCheck} is an ${evenOrOdd} number`)
/* WRITE YOUR ANSWER HERE */
