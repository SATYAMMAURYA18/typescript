"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
const obj = {
    name: "Rohit",
    age: 30,
    gender: "Common",
};
//interface ke sare property are optional.
const obj2 = {
    name: "rohit",
    balance: 210
};
//interface ke sare property ko lena hai
const obj3 = {
    name: "rohit",
    balance: 210,
    age: 30
};
//interface ke kisi bhi property ko change nhi kr skte
const obj4 = {
    name: "rohit",
    balance: 210,
    age: 30
};
//obj4.age=50//it will give error because obj4 is readonly.
//we also can build array of object
let arr = [{
        name: "Rohit",
        age: 45,
        balance: 89834
    },
    {
        name: "Mohit",
        age: 25,
        balance: 747848
    }
];
//function in ts
function greet(a) {
    console.log(a);
    return a + 5;
}
let b = greet(10);
console.log(b);
function meet(msg, val) {
    console.log(msg, val);
}
meet("Ellie Nova", 43);
//default parameter
function neet(msg = "Satyam") {
    console.log(msg);
}
neet();
neet("Bittu");
//optional parameter
function Gate(person) {
    console.log(person || "Satyam");
}
Gate("Rohit");
Gate();
//arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 5));
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
//30 minute done.....
//# sourceMappingURL=advance.js.map