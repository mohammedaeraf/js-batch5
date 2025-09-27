let fruits = ["apple", "mango", "orange"];

// ✅ Remove the first element using shift()
let firstFruit = fruits.shift();  
console.log(firstFruit); // 👉 Output: "apple" (removed element)
console.log(fruits);     // 👉 Remaining array: ["mango", "orange"]

// ✅ Insert an element at the beginning using unshift()
fruits.unshift("kiwi");
console.log(fruits);     // 👉 ["kiwi", "mango", "orange"]

// ✅ Search for an element's position using indexOf()
let index = fruits.indexOf("orange");
console.log("Position of orange = " + index); // 👉 2

// ✅ Check if an element exists in the array using includes()
let searchFruit = "banana";
let found = fruits.includes(searchFruit);
console.log(searchFruit + " present in array " + found); // 👉 false

// ✅ Extract a part of the array using slice()
let numbers = [19, 20, 30, 40, 50, 60, 70];
let part = numbers.slice(0, 5); // Extracts elements from index 0 to 4
console.log(part);              // 👉 [19, 20, 30, 40, 50]

// ✅ Combine two arrays using concat()
let a = [1, 2];
let b = [3, 4, 5];
let c = a.concat(b);
console.log(c); // 👉 [1, 2, 3, 4, 5]

// ✅ Insert an element in the middle using splice()
// Syntax: splice(startIndex, deleteCount, itemToInsert)
a.splice(1, 0, 100); 
console.log(a); // 👉 [1, 100, 2]

b.splice(2, 0, 1000);
console.log(b); // 👉 [3, 4, 1000, 5]

// ✅ Calculate total using a for loop
let numbers2 = [10, 20, 30];
let total = 0;

for (let i = 0; i < numbers2.length; i++) {
  total = total + numbers2[i];
}
console.log("Total = " + total); // 👉 60

// ✅ Calculate total using a for-of loop (simpler)
total = 0;
for (let n of numbers2) {
  total = total + n;
}
console.log("Total = " + total); // 👉 60
