// Find the largest number
let a = parseInt(prompt("Enter the a number"));
let b = parseInt(prompt("Enter the b number"));
let c = parseInt(prompt("Enter the c number"));

// if (a >= b && a >= c) {
//   document.write("a is bigger");
// } else if (b >= a && b >= c) {
//   document.write("b is bigger");
// } else {
//   document.write("c is bigger");
// }

// Using Math.max
const num = Math.max(a, b, c);
console.log(`The largest number is : ${num}`);
