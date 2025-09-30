const greet = (name) => `Hello ${name}!`;
console.log(greet("Mohammed"));

const max = (x, y) => (x > y ? x : y);
console.log("Max is", max(11, 21));

const isEven = (n) => n % 2 == 0 ? true : false;
console.log(isEven(10));

let PI = 3.142;
const getArea = (r) => PI * r * r;
console.log("Area =", getArea(10));

const welcome = () => "Welcome to JavaScript";
console.log(welcome());
