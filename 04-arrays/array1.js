let courses = ["Java", "Python", "MERN"];

courses[1] = "Golang";   // changing the value
courses.push("MongoDB");
courses.push("ChatGPT & AI Tools");

console.log(courses);

let lastCourse = courses.pop();
console.log(lastCourse);

let courseCount = courses.length;
console.log(courseCount);

let j;
console.log("**** List of Courses *****");
for(let i = 0; i < courses.length; i++) {
    j = i + 1;
    console.log("Course #" + j + " -> " + courses[i]);
}