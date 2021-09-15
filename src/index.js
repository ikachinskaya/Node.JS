"use strict";

// const lodash = require("lodash");
// console.log(lodash.random());

const component = require("./Component");
require("./style.css");

const root = document.getElementById("root");
root.append("Вставили через JS ");
root.append(" Еще вставили через JS");
const comp1 = new component.Component();
console.log(1);
