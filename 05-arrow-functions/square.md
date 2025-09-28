```javascript
// Function to calculate factorial using normal function syntax
function calcFact(n) {
  let fact = 1; // start with 1 because factorial is product
  for (let i = 1; i <= n; i++) {
    fact = fact * i; // multiply fact with i in each step
  }
  return fact; // return the final factorial value
}

// Same factorial calculation using an arrow function
let calcFactArrow = (n) => {
  let fact = 1; // initialize factorial as 1
  for (let i = 1; i <= n; i++) {
    fact = fact * i; // keep multiplying numbers from 1 to n
  }
  return fact; // return result
};

// Input value
let n = 5;

// Call arrow function and store result
let f = calcFactArrow(n);

// Using template strings to display the output
console.log(`Factorial of ${n} = ${f}`);
```

---

### 🔹 Explanation:

1. **Factorial Definition**:

   - Factorial of `n` (written as `n!`) = `1 × 2 × 3 × ... × n`.
   - Example: `5! = 1 × 2 × 3 × 4 × 5 = 120`.

2. **Two Approaches**:

   - `calcFact()` → uses **normal function syntax**.
   - `calcFactArrow()` → uses **arrow function syntax**.

3. **Loop Logic**:

   - Start with `fact = 1`.
   - Multiply `fact` by every number from `1` to `n`.
   - After the loop ends, return the result.

4. **Output** (for `n = 5`):

   ```
   Factorial of 5 = 120
   ```
