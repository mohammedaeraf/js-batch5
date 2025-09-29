Example of using **arrow functions, loops, and template strings together** in JavaScript.
Here’s the detailed explanation 👇

---

```javascript
let printTable = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};
printTable(5);
```

---

### 🔹 Step-by-Step Explanation:

1. **Arrow Function Definition**

   ```javascript
   let printTable = (n) => { ... };
   ```

   * `printTable` is a function created using arrow function syntax.
   * It accepts one parameter `n` (the number for which the multiplication table will be printed).

2. **For Loop**

   ```javascript
   for (let i = 1; i <= 10; i++) {
     ...
   }
   ```

   * Starts with `i = 1`.
   * Runs until `i <= 10`.
   * Increases `i` by 1 after every iteration.
   * So, it loops **10 times** to print table from `n × 1` up to `n × 10`.

3. **Template String**

   ```javascript
   console.log(`${n} x ${i} = ${n * i}`);
   ```

   * Uses template literals (backticks `` ` ``).
   * `${n}` inserts the number passed into the function.
   * `${i}` inserts the current multiplier.
   * `${n * i}` inserts the calculated result.
   * Example for `n = 5, i = 3`:

     ```
     5 x 3 = 15
     ```

4. **Function Call**

   ```javascript
   printTable(5);
   ```

   * Calls the function with `n = 5`.
   * Prints the multiplication table of 5.

---

### ✅ Expected Output:

```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```
