"use strict";

//загрузка модуля
const { MyMath } = require("./MyMath");
const { Component } = require("./Component.js");

console.log("Hello!");

const data = 3; /* мешать друг другу не будут*/

const header = new Component();

console.log(MyMath.sum(1, 2, 58, 7, 63));
console.log(MyMath.substract(1, 2, 58, 7, 63));
console.log(MyMath.div(1, 2, 58, 7, 63));
console.log(MyMath.multiply(1, 2, 58, 7, 63));
//==================================================

console.log(globalThis);
console.log("========================================");
console.log(process);
console.log("========================================");
console.log(module);
//==================================================
/*
resolve -> loading -> wrapping -> evaluation -> caching

resolve - поиск файла
  1. подключение кор модуля ноды (Globals)
  2. поиск файла по имени
     2.1 поиск файла с расширением .js
     2.2 поиск файла с расширением .json
  3. поиск папки с таким именем
     3.1 поиск packaje.json -> main
     3.2 index.js | index.json
  4. поиск папки node_modules
  5. вывод ошибки     
loading - чтение содержимого файла 
wrapping - оборачивание в функцию, добавление инжектированных переменных (console, __dirname, __filename, module, require)
evaluation - запуск кода в файле 1 раз
caching - кеширование результата работы evaluation

*/
