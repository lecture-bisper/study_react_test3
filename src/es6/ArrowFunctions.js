// 화살표 함수 : ES6 버전에서 함수를 선언하는 새로운 방식
// ES5 버전에서 변수에 익명함수를 사용하여 함수를 선언하는 방식을 변경하여 function 키워드를 생략하고, 매개변수와 코드 블럭 사이에 => 를 사용하는 방식
// 소스코드가 반환값 한 줄인 경우 코드 블럭을 생략 가능
// 매개변수가 1개인 경우 매개변수의 괄호를 생략 가능
// 사용법 :
// 변수명 = (매개변수, ...) => {
//    소스코드...
//    return 반환값
// }
// 변수명 = (매개변수, ...) => 반환값;
// 변수명 = 매개변수 => 반환값;
// 변수명 = () => 반환값;

function add(first, second) {
  return first + second;
}

var add = function(first, second) {
  return first + second;
};

var add = function add(first, second) {
  return first + second;
};

// this scope를 전달한 예
var self = this;
var addThis = function(first, second) {
  return self.value + first + second;
};

var addThis = (first, second) => first + second;

function addNumber(num) {
  return function(value) {
    return num + value;
  };
}
// 화살표 함수로 변환한 예
var addNumber = num => value => num + value;

var addTwo = addNumber(2);
var result = addTwo(4); // 6

// bind함수를 통해 this scope를 전달한 예
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
