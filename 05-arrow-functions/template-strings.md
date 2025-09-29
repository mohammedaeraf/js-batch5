Example to **demonstrate template strings (template literals)** in JavaScript!
Here’s the detailed explanation 👇

```javascript
let name = "Rahul";
let subject = "Mathematics";
let marks = 92;

let message = `Hello ${name}, 
You have scored ${marks} marks in ${subject}.
Congratulations! 🎉`;
console.log(message);
```

---

### 🔹 Step-by-Step Explanation:

1. **Declaring Variables**

   ```javascript
   let name = "Rahul";
   let subject = "Mathematics";
   let marks = 92;
   ```

   * `name` → stores `"Rahul"`.
   * `subject` → stores `"Mathematics"`.
   * `marks` → stores `92`.

2. **Using Template String**

   ```javascript
   let message = `Hello ${name}, 
   You have scored ${marks} marks in ${subject}.
   Congratulations! 🎉`;
   ```

   * Backticks (`` ` ``) are used instead of normal quotes (`""` or `''`).
   * `${variable}` → is a placeholder where values of variables get inserted directly.
   * Supports **multi-line text** without needing `\n`.

   So, it becomes:

   ```
   Hello Rahul, 
   You have scored 92 marks in Mathematics.
   Congratulations! 🎉
   ```

3. **Printing Output**

   ```javascript
   console.log(message);
   ```

   * Displays the final formatted message on console.

---

### 🔹 Key Advantages of Template Strings:

✅ Can embed variables directly (`${name}`).
✅ Can write multi-line strings easily.
✅ Cleaner and more readable than string concatenation (`+`).
