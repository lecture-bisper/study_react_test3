// 확장 표현식 : ES6 버전에서 추가된 object 사용 방법

// ES5의 예
console.log('----- ES5 버전 -----');
var x = 0;
var y = 0;

var obj = { x: x, y: y};
console.log(obj);

var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
// { oneother: 'some value' }
console.log(combined);

// 기존 object 변수에 메서드 추가 시 키가 되는 변수명 : function() {} 형태를 사용하여 추가
var obj2 = {
  methodA: function() { console.log('A'); },
  methodB: function() { return 0; },
};
console.log(obj2);
obj2.methodA();
obj2.methodB();

console.log()

// ES6의 예
console.log('----- ES6 버전 -----');
var x = 0;
var y = 0;
// object 타입의 값 추가 시 키를 설정하지 않으면 변수명이 키로 들어감
var obj = { x, y };
console.log(obj);

// object 타입 생성 시 오른쪽에서 먼저 만들고 왼쪽으로 넘김
var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
};
console.log(combined);

// 기존 object 타입의 변수에 메서드를 추가할 경우 function을 생략하고 그냥 메서드를 추가함
var obj2 = {
  x,
  methodA() { console.log('A'); },
  methodB() { return 0; },
};

console.log('\n\n');
// 구조 분해 할당 : ES6 버전에서 새로 추가된 데이터 대입 방식
// ES5 예제
console.log("----- ES5 버전 -----");
var list = [0,1];
// 배열의 데이터를 변수에 대입
var item1 = list[0];
var item2 = list[1];
// 기본값 사용하기
var item3 = list[2] || -1;
console.log(item1);
console.log(item2);
console.log(item3);

// 데이터 스왑
var temp = item2;
item2= item1;
item1 = temp;
console.log(item1);
console.log(item2);

var obj = {
  key1: 'one',
  key2: 'two',
};

// object 타입의 데이터를 변수에 대입
var key1 = obj.key1;
var key2 = obj.key2;
// 데이터가 없을 경우 기본 값 사용하기
var key3 = obj.key3 || 'default key3 value';
var newKey1 = key1;
console.log(key1);
console.log(key2);
console.log(key3);


// ES6 예제
console.log('----- ES6 버전 -----');
var list = [0, 1];
// 변수 선언 시 []를 사용해 배열처럼 변수명을 나열하여 사용
// 변수명 뒤에 = 기호를 사용하여 기본값 설정
var [
  item1,
  item2,
  item3 = -1,
] = list;
console.log(item1);
console.log(item2);
console.log(item3);

// 데이터 스왑하기
[item2, item1] = [item1, item2];
console.log(item1);
console.log(item2);

var obj = {
  key1: 'one',
  key2: 'two',
};

// object 를 사용하여 사용하여 변수에 데이터 대입
// 오른쪽에 있는 object 타입의 키와 동일한 변수명에 데이터가 대입됨
// : 기호를 사용하여 새로운 변수명을 적용할 수 있음
// = 기호를 사용하여 기본값을 설정할 수 있음
var {
  key1: newKey1,
  key2,
  key3 = 'default key3 value',
} = obj;
console.log(newKey1);
console.log(key2);
console.log(key3);

// item1라는 변수에 첫번째 값을 대입
// otherItems 라는 배열에 나머지 값을 대입 (전개표현식을 사용하여 배열 자체가 들어감)
var [item1, ...otherItems] = [0, 1, 2];
console.log(item1);
console.log(otherItems);
// otherItems = [1, 2]

// key1이라는 변수에 object의 key1의 값 one을 대입 (값만 저장됨)
// others 라는 object에 two 를 대입 (전개 표현식을 사용하여 object 자체가 들어감)
var { key1, ...others } = { key1: 'one', key2: 'two' };
console.log(key1);
console.log(others);
// others = { key2: 'two' }



