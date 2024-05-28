function somar(a, b) {
    if ((typeof a != "number") || (typeof b != "number")) {
        return "Caractere Invalido";
    } else {
        return a + b;
    }
  }

module.exports = somar

