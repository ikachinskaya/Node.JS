"use strict";

//загрузка модуля
//не нужно деструктурировать
const MyMath = require("./MyMath");
const Component = require("./Component.js");

console.log("Hello!");

const header = new Component();

console.log(MyMath.sum(1, 2, 58, 7, 63));
console.log(MyMath.substract(1, 2, 58, 7, 63));
console.log(MyMath.div(1, 2, 58, 7, 63));
console.log(MyMath.multiply(1, 2, 58, 7, 63));
