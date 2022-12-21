// var : ES5 버전까지 자바스크립트에서 변수를 선언하는 유일한 방식
// 함수 기준, for 문 안에서 선언 시 for문 밖에서 사용 가능, 변수의 재선언 가능
// let : ES6 버전에서 사용하는 변수 선언 방식
// 코드 블럭 기준, 코드 블럭을 벗어나면 접근 불가, 변수의 재선언 불가
// const : ES6 버전에서 사용하는 변수 선언 방식
// 코드 블럭 기준, 코드 블럭을 벗어나면 접근 불가, 변수의 재선언 불가, 읽기 전용
// const 를 사용한 변수에 값을 저장했을 경우 수정 불가
// const 를 사용한 변수에 배열, object 데이터를 저장했을 경우 해당 배열 및 object의 요소를 변경할 수 있음

// const 는 상수를 만드는 키워드 이므로 값을 변경하고자 할 경우 오류 발생
const num = 1;
// num = 3; // 타입 에러가 발생합니다

const str = '문자';
// str = '새 문자'; // 타입 에러가 발생합니다

// const 로 만들어진 배열에 데이터를 추가하여 오류 발생
const arr = [];
// arr = [1, 2, 3]; // 타입 에러가 발생합니다

const arr1 = [1, 2, 3];
console.log(arr1);
// const 로 만들어진 배열의 각 요소의 데이터를 수정하는 것은 문제가 없음
arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
console.log(arr1);

// object 타입의 변수에 데이터를 추가하여 오류
const obj = {};
// obj = { name: '내 이름' }; // 타입 에러가 발생합니다

const obj1 = {num: 1, name: '아이유'};
console.log(obj1);

// object 타입 변수의 기존 요소의 데이터를 수정하는 것은 문제가 없음
obj1.num = 2;
obj1.name = '유인나';
console.log(obj1);


// const로 생성한 배열에 내장 함수 사용 시 데이터 추가, 삭제가 가능함
// 하지만 무결성 제약조건을 위반하게 되므로 사용하지 않아야 함
const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0,1]
arr2.pop(); // arr2 = [1]

const obj2 = {};
obj2['name'] = '내이름'; // obj2 = { name: '내이름' }
Object.assign(obj2, { name: '새이름' }); //obj2 = { name: '새이름' }
delete obj2.name; //obj2 = {}


// const 사용 시 값을 직접 바꾸려하는 것이 아닌 변수를 새로 선언하여 값을 변경하는 방법을 사용
const num1 = 1;
const num2 = num1 * 3; // num2 = 3

const str1 = '문자';
const str2 = str1 + '추가'; // str2 = '문자추가'

// 배열 사용 시 무결성 내장 함수를 사용하여 새로운 배열을 선언하는 방식으로 데이터를 추가, 삭제
const arr3 = [];
const arr4 = arr3.concat(1); // arr4 = [1]
console.log(arr4);
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
console.log(arr5);
const arr6 = arr5.slice(0, 1); // arr6 = [1], arr5 = [1, 2, 3]
console.log(arr6);
const [first, ...arr7] = arr5; // arr7 = [2, 3], first = 1
console.log(first)
console.log(arr7)


const obj3 = { name: '내이름', age: 20 };
const obj4 = { ...obj3, name: '새이름' }; // obj4 = { name: '새이름', age: 20}
const { name, ...obj5 } = obj4; // obj5 = { age: 20 }

const arr8 = [1, 2, 3];
// 가변 변수를 사용한 예
for (let i = 0; i < arr8.length; i++) {
  console.log(arr8[i]);
}
// iterator 방식의 for-in 루프와 함께 불변 변수를 사용한 예
for (const item in arr8) {
  console.log(item);
}

// forEach 함수를 활용한 예
arr.forEach((item, index) => {
  console.log(item);
  console.log(index);
});
