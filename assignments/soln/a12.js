class Product {
    name;
    price;
    quantity;

    constructor(n, p, q) {
        this.name = n;
        this.price = p;
        this.quantity = q;
    }

    val() {
        return this.price * this.quantity;
    }

    disc(p) {
        this.price = this.price - (this.price * p / 100);
    }

    stock(q) {
        this.quantity = + q;
    }
}

const product1 = new Product("Laptop", 900, 5);
const product2 = new Product("Smartphone", 700, 8);
const product3 = new Product("Shoes", 120, 15);

console.log(product1.val());
product1.disc(10);
console.log(product1.price);
product1.stock(20);
console.log(product1.quantity);


 
