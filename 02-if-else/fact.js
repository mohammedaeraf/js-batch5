// factorial = 4! = 1 * 2 * 3 * 4 = 24
// 5! = 1 x 2 x 3 x 4 x 5 = 120
// 3! = 1 x 2 x 3 = 6
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i; // fact = 2
  //   console.log("i = " + i);
  //   console.log("fact = " + fact);
}
console.log();
console.log("Factorial of " + n + " = " + fact);
