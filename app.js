let n = 6; // total number of rows questions one
for (let i = 1; i <= n; i++) {
  let space = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(space + stars);
}
//     *
//    ***
//   *****
//  *******
// *********

// isPalindrome
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}
console.log(isPalindrome("naman"));

// true

// nth sum
let num = 10;
let sum = 0;
for (let i = 2; i <= num; i = i + 2) {
  sum = sum + i;
}
console.log(sum);

// output:30

let age = prompt("Please enter your age:");
if (age < 18) {
  alert("Sorry, you must be at least 18 years old!");
} else {
  alert("Welcome! You are eligible.");
}
// 17  Sorry, you must be at least 18 years old!
// 20  Welcome! You are eligible.
