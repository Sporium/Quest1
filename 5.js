// 5) Реализовать класс 2-х мерный вектор.
// Класс должен содержать приватные атрибуты x и y - координаты точки куда
// направлен вектор, а также публичные методы:
// ● сложение векторов (принимает на вход другой объект класса Вектор)
// ● вычитание векторов (принимает на вход другой объект класса Вектор)
// ● умножение вектора на число (принимает на вход число)
// ● вывод вектора на печать (вывод строки содержащей информацию про
// объект)

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
  var x = this.x + otherVector.x;
  var y = this.y + otherVector.y;
  return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
  var x = this.x - otherVector.x;
  var y = this.y - otherVector.y;
  return new Vector(x, y);
};
Vector.prototype.multiply = function multiply(scalar) {
  var x = this.x * scalar;
  var y = this.y * scalar;
  return new Vector(x, y);
};
Vector.prototype.toString = function toString() {
  return '(' + this.x + ', ' + this.y + ')';
};
Vector.prototype.toObject = function () {
  return { x: this.x, y: this.y };
};

console.log(new Vector(1, 2).minus(new Vector(2, 7)));
console.log(new Vector(1, 2).plus(new Vector(2, 7)));
console.log(new Vector(1, 2).multiply(5));
console.log(new Vector(1, 2).toString());
console.log(new Vector(1, 2).toObject());
