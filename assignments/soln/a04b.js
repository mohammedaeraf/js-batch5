for (n = 1; n <= 50; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("fizz");
  } else if (n % 3 == 0) {
    console.log("buzz");
  } else if (n % 5 == 0) {
    console.log("fizzbuzz");
  } else {
    console.log(n);
  }
}