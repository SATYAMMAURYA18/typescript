"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
        console.log(`hii ${this.name}`);
    }
}
const obj1 = new Person("Satyam", 21);
const obj2 = new Person("Ram", 564);
console.log(obj1);
obj1.greet();
//public private protected
class Customer {
    name;
    age;
    balance;
    constructor(name, age, balance) {
        this.name = name,
            this.balance = balance,
            this.age = age;
    }
}
const p1 = new Customer("Deepak", 43, 65474);
console.log(p1);
class Employee extends Customer {
    salary;
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
}
const E1 = new Employee(420, "Rohit", 30, 432);
console.log(E1);
//generic
//in generic data type ko generalize krte hai
function value(a) {
    return a;
}
console.log(value(43));
console.log(value("Mohan"));
console.log(value([4, 5, 3, 28]));
console.log(value(['ram', 'laxman', 'yadav']));
const obj6 = {
    name: "Rohan",
    age: 20,
    salary: 43
};
console.log(obj6);
const obj7 = {
    name: "Rohan",
    age: 20,
    salary: "two thousand"
};
console.log(obj7);
//# sourceMappingURL=classes.js.map