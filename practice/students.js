let students = [
  { name: "Ali", age: 18, marks: 85 },
  { name: "Zara", age: 19, marks: 92 },
  { name: "John", age: 17, marks: 78 },
];

for (s of students) {
  console.log(`${s.name} scored ${s.marks} marks`);
}

let toppers = students.filter((s) => s.marks > 80);
console.log("Toppers = ", toppers);

let studentNames = students.map((s) => s.name);
console.log("Student Names = ", studentNames);

let totalMarks = students.reduce((total, student) => total + student.marks, 0);
console.log("Total Marks = ", totalMarks);

console.log("Average Marks = ", totalMarks / students.length);
