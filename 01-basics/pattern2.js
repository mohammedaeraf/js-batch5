// stars pattern
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 5; j >= i; j--) {
    line = line + j + " ";
  }
  console.log(line);
}
