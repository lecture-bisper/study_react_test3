// 전개 연산자 ( ... )
// 나열혈 자료를 추출하거나 연결할 때 사용
// 배열, 객체, 변수명 앞에 ... 기호를 사용하여 사용
// 배열 객체 함수 인자 표현식 안에서만 동작함

// ES5 문법
console.log('----- ES5 문법 -----');
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
// 배열의 각 요소를 추출하여 새로운 배열을 생성
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(combined);

// concat() 함수를 사용하여 두 배열을 합함
var combined = array1.concat(array2);
console.log(combined);
var combined = [].concat(array1, array2);
console.log(combined);

// index로 배열의 요소값을 출력
var first = array1[0];
console.log(first);
var second = array1[1];
console.log(second);

// || 연산자를 사용하여 추출할 요소가 없을 경우 기본값을 사용함
var three = array1[2] || 'empty';
console.log(three);

function func() {
  // 특수변수 (arguments)를 사용하여 함수 내 인자 항목들을 배열로 변환
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
}

// ES6 문법
console.log('----- ES6 문법 -----');
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2];
// combined = ['one', 'two', 'three', 'four'];
var [first, second, three = 'empty', ...others] = array1;
// first = 'one', second = 'two', three = 'empty', others = []

function func(...args) {
  var [first, ...others] = args;
}

function func(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

// 올바르지 못한 예
// var wrongArr = ...array1;
