// Define a class
class Course {
  // properties
  title; // Property: brand of the car
  duration; // Property: model of the car
  fee; // Property: year of the car
  description; // Property: year of the car

  // Constructor method to initialize the properties
  constructor(title, duration, fee, description) {
    this.title = title;
    this.duration = duration;
    this.fee = fee;
    this.description = description;
  }

  // Method to display the details of the car
  displayDetails() {
    console.log(
      `Course Details => ${this.title} ${this.duration} ${this.fee} ${this.description}.`
    ); // Log the car details
  }

  applyDiscount(percent) {
    let discount = (this.fee * percent) / 100;
    this.fee = this.fee - discount;
    console.log(
      `Applied discount of ${percent}% on ${this.title} course. Discounted fee = Rs ${this.fee}/-`
    );
  }
}

let course = new Course(
  "Python",
  "60 Days",
  9000,
  "Data Science with Python, numpy, pandas.."
);
course.displayDetails();
course.applyDiscount(20);

let course2 = new Course("PHP","60 Days",10000, "PHP with MySQL");
course2.displayDetails();
course2.applyDiscount(10);