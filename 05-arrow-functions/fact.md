Here’s your code with **detailed explanations** added 👇

```javascript
// Arrow function to calculate square of a number
let square = (n) => n * n;

// Input value
let n = 3;

// Call the arrow function with n and store the result
let sq = square(n); 

// Print result using template string
console.log(`Square of ${n} = ${sq}`);
```

---

### 🔹 Explanation:

1. **Arrow Function**

   ```javascript
   let square = (n) => n * n;
   ```

   * `square` is a function that takes one parameter `n`.
   * `=>` defines it as an arrow function.
   * The expression `n * n` returns the square of the number.

2. **Input Value**

   ```javascript
   let n = 3;
   ```

   * We assign `3` to the variable `n`.

3. **Function Call**

   ```javascript
   let sq = square(n);
   ```

   * Calls the `square` function with `n` (which is `3`).
   * The function calculates `3 * 3 = 9`.
   * Result (`9`) is stored in `sq`.

4. **Output with Template String**

   ```javascript
   console.log(`Square of ${n} = ${sq}`);
   ```

   * Template string `${n}` inserts the number (`3`).
   * `${sq}` inserts the result (`9`).
   * Output becomes:

     ```
     Square of 3 = 9
     ```

---

👉 Would you like me to also create **2–3 similar arrow function examples** (like cube, double, sum of two numbers) with explanations for practice?
