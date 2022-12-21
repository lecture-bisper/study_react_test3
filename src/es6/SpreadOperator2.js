// ES5 예제
console.log('----- ES5 방식 -----');
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
// object 변수에서 데이터를 추출하여 새로운 object 변수를 생성
var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
console.log(combined);

// assign() 함수를 이용하여 object 변수를 하나로 합함
// 첫번째 매개변수는 합해질 대상, 두번째, 세번째 매개변수를 첫번째 매개변수로 합함
// 동일한 키가 있을 경우 뒤쪽에 나오는 object 변수의 값으로 덮어씀
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
console.log(combined);

var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
console.log(combined);
// 첫번째 빈 object 에 object 변수 combined를 합함
var others = Object.assign({}, combined);
console.log(others)
// object 타입 변수 others의 키 other 삭제
delete others.other;
console.log(others);

console.log();

// ES6 예제
// 전개 연산자를 사용하여 2개의 object를 하나로 합함
// 동일한 키가 있을 경우 뒤에 나온 object의 키로 덮어씀
console.log('----- ES6 방식 -----');
var combined = {
  ...objectOne,
  ...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
console.log(combined);

var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
console.log(combined);

// 특정 값을 추출 시 추출하려는 키 이름을 적고 나머지는 전개 연산자를 사용
var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4}
// other = 0
console.log(other)
console.log(others)
