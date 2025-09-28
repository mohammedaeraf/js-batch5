
```javascript
// Arrow function to add two numbers
let add = (a, b) => a + b;

// Input values
let a = 3;
let b = 4;

// Call the function and store result
let total = add(a, b);

// Print the result using template string
console.log(`Sum of ${a} and ${b} = ${total}`);
```

---

### 🔹 Step-by-Step Explanation:

1. **Arrow Function Definition**

   ```javascript
   let add = (a, b) => a + b;
   ```

   * `add` is an arrow function with two parameters: `a` and `b`.
   * It calculates and **returns the sum** of `a + b`.

2. **Assigning Input Values**

   ```javascript
   let a = 3;
   let b = 4;
   ```

   * Variables `a` and `b` are initialized with values `3` and `4`.

3. **Calling the Function**

   ```javascript
   let total = add(a, b);
   ```

   * Calls the `add` function with inputs `(3, 4)`.
   * Inside the function: `3 + 4 = 7`.
   * The result (`7`) is stored in `total`.

4. **Displaying Output with Template String**

   ```javascript
   console.log(`Sum of ${a} and ${b} = ${total}`);
   ```

   * `${a}` → inserts value of `a` (3).
   * `${b}` → inserts value of `b` (4).
   * `${total}` → inserts result (7).
   * Final output on console:

     ```
     Sum of 3 and 4 = 7
     ```
