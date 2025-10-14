const arr1 = [1, 20, 33];
const arr2 = [4, 5, 6];

// spread operator == ...
const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

console.log(combinedArr);

const userObj = {
  id: 1,
  name: "Usman",
};

const userProfileObj = {
  age: 14,
  occupation: "Student",
};

const userCompleteObj = { ...userObj, ...userProfileObj };
console.log(userCompleteObj);

const productObj = {
  id: 1001,
  title: "logitech wireless mouse",
  category: "mice",
  price: 900,
};

const updatedProductObj = {
  ...productObj,
  title: "Logitech Wireless Mouse M213",
  price: 1000,
};

console.log(updatedProductObj);
