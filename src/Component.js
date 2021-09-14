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

/* экспорт класса */
module.exports.Component = Component;
module.exports.data = data;
console.log(module.exports);
