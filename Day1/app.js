"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 10;
let b = 10;
let c = "satyam";
console.log(a * 10);
console.log(c + 10);
let isTrue = true;
const d = NaN;
//non primitive data type;
//1.array
let arr = [3, 4, 5, 6];
let arr2 = [4, 5, 6, 6];
let arr3 = [4, 4.5, true, "sohan"]; //mixed type array in ts
arr3.push(false);
console.log(arr3);
let arr4 = [44, 4.5, true, "sohan"];
//tuple -> ek prakar ka array hi hota hai.
let tup = ['rohit', 67]; //tuple fix size ka hota hai
//tuple me jitne datatype declair kroge utna hi us type ko daloge
//for example 4 number dalne hai toh 4 bar number assign krana padega phir order bhi matter krta hai
let tup2 = [65, 78, 'satyam', 84, true];
//# sourceMappingURL=app.js.map