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

switch (grade) {
  case "A":
    result = "You scored Distinction!";
    break;
  case "B":
    result = "You scored First Class!";
    break;
  case "C":
    result = "You scored Second Class!";
    break;
  case "D":
    result = "You Failed.. Better luck next time!";
    break;
  default:
    result = "Invalid Grade!";
    break;
}

console.log("Result: " + result);
