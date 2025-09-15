// let previousReading = 300;
// let presentReading = 490;
// let calls = presentReading - previousReading;

let calls = 300;

let totalBill;
if (calls <= 100) {
  totalBill = 0;
} else if (calls > 200) {
  totalBill = 0 * 100 + 0.9 * 100 + (calls - 200) * 0.8;
} else {
  totalBill = 0 * 100 + (calls - 100) * 0.9;
}
console.log("Total Bill = " + totalBill);
