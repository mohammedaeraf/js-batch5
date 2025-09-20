// Program to print grade based on percent (A >= 80; B >=60, C>=40, D)
// 1. Input
// 2. Processing
// 3. Output

let percent = 34.6;
let grade = "";

if (percent >= 80) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 40) {
  grade = "C";
} else {
  grade = "D";
}
console.log("Percent = " + percent);
console.log("Grade = " + grade);

let result = "";
if (grade == "A") {
  result = "You scored Distinction!";
} else if (grade == "B") {
  result = "You scored First Class!";
} else if (grade == "C") {
  result = "You scored Second Class!";
} else if (grade == "D") {
  result = "You Failed.. Better luck next time!";
} else {
  result = "Invalid Grade!";
}

console.log("Result: " + result);
