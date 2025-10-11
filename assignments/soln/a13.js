let students = [
  { name: "Ali", age: 18, marks: 85 },
  { name: "Zara", age: 19, marks: 92 },
  { name: "John", age: 17, marks: 78 },
];

console.table(students);

for (student of students) {
  console.log(`name ${student.name}`);
  console.log(`Age ${student.age}`);
  console.log(`marks ${student.marks}`);
}
students.forEach((student) => {
  console.log(`${student.name} ${student.age} ${student.marks}`);
});

let toppers = students.filter((student) => student.marks > 80);
console.log(toppers);

let studentNames = students.map((student) => student.name);
console.log(studentNames);

let totalMarks = students.reduce( (total, student) => total + student.marks, 0)
console.log(totalMarks);

console.log(totalMarks / students.length);
