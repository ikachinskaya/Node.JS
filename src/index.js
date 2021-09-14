"use strict";

//плохой вариант
const fs = require("fs");
const fsPromises1 = fs.promises;

// хороший вариант
const fsPromises2 = require("fs/promises");
const fsPromises3 = require("fs").promises;

fsPromises3
  .readFile("src/text.txt")
  .then((response) => console.log(response.toString()));
console.log(fsPromises3);

fsPromises3
  .readFile("src/text.txt", { encoding: "latin1" })
  .then((response) => console.log(response));
console.log(fsPromises3);

fsPromises3
  .readFile("src/text.txt", { encoding: "utf-8" })
  .then((response) => console.log(response));
console.log(fsPromises3);
//=====================================================

/* 
Создать новый файл и в него записать сначала содержимое старого файла, а потом новые данные
*/

fsPromises3.readFile("src/text.txt", { encoding: "utf-8" }).then((oldData) => {
  const newData = `${oldData}\n5666`;
  fsPromises3.writeFile("src/message.txt", newData, { encoding: "utf-8" });
});
