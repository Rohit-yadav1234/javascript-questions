// let a = 1
// console.log(a++) // 1

// let b = 1
// console.log(++b) // 2

// let a = 1
// console.log(a++ + ++a) // 4
// console.log(a++ - ++a) // -2
// console.log(a++ + ++a + a)  // 7

// console.log([] == [])  //false
// console.log(+ "5") // 5
// console.log(typeof NaN)  // number
// console.log("0" == "0") // true
// console.log("0" === 0)  //false es m value b same honi chaiya or data type b
// console.log(null) // null


// let n = 6;
// for (let i = 7; i <= n; i++) {
//   let space = " ".repeat(n - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(space + stars);
// }
// //     *
// //    ***
// //   *****
// //  *******
// // *********

// // isPalindrome
// function isPalindrome(word) {
//   return word === word.split("").reverse().join("");
// }
// console.log(isPalindrome("naman"));
// // true

// // nth sum
// let num = 10;
// let sum = 0;
// for (let i = 2; i <= num; i = i + 2) {
//   sum = sum + i;
// }
// console.log(sum);
// // output:30

// let age = prompt("Please enter your age:");
// if (age < 18) {
//   alert("Sorry, you must be at least 18 years old!");
// } else {
//   alert("Welcome! You are eligible.");
// }
// 17  Sorry, you must be at least 18 years old!
// 20  Welcome! You are eligible.

// callback function
// function add(a,b){
//   return a+b;
// }
// function divide(a,b){
//   return a/b;
// }
// function main(a,b,operation){
//   return operation(a,b)
// }
// console.log(main(2,6,add))
// console.log(main(2,2,divide))
