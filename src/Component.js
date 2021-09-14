/* Модуль - блок кода, который используется повтроно */
class Component {
  constructor(props) {
    this.props = props;
  }
  render() {
    return "I rendered!";
  }
}

const data = 1; /* мешать друг другу не будут*/

/*
экспорт класса
в объекте exports создаем свойство Component со значением Component(класс)
*/
console.log(exports);
exports.Component = Component;
console.log(exports);