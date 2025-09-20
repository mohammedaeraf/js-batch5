// Program to print grade based on percent (A >= 80; B >=60, C>=40, D)
// 1. Input
// 2. Processing
// 3. Output

let percent = 34.60;
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
