function printMultiplicationTable(number, limit = 10) {
  console.log(`Multiplication Table for ${number}:`);
  console.log("-----------------------------");

  for (let i = 1; i <= limit; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
  }
}

// Example usage
printMultiplicationTable(12);
