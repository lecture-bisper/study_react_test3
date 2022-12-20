// ES5 문법
console.log('-----ES5 문법으로 출력-----');
var string1 = '안녕하세요';
var string2 = '반갑습니다';
// 문자열 연결 연산자를 사용하여 문자열을 연결함
var greeting = string1 + ' ' + string2;
console.log(greeting);

var product = { name: '도서', price: '4200원' };
// 변수와 문자열을 연결할 때도 문자열 연결 연산자를 사용함
var message = '제품' + product.name + '의 가격은' + product.price + '입니다';
console.log(message);

// 줄바꿈 시 이스케이프 문자 \n 을 사용함
var multiLine = '문자열1\n문자열2';

var value1 = 1;
var value2 = 2;
var boolValue = false;
// 연산 결과를 먼저 진행하기 위한 괄호를 사용함
var operator1 = '곱셈값은 ' + value1 * value2 + '입니다. ';
console.log(operator1);

var operator2 = '불리언값은 ' + (boolValue ? '참' : '거짓') + '입니다. ';
console.log(operator2);


//ES6 문법
// 템플릿 문자열 사용
// 따옴표 ('') 대신 백틱(``)을 사용하여 문자열을 표시
// 백틱 (``) 사이에 ${변수명} 형태로 문자열 연결 연산자 없이 변수의 내용을 출력

console.log(`\n-----ES6문법으로 출력-----`);
var string1 = '안녕하세요';
var string2 = '반갑습니다';
// 문자열 템플릿으로 변수의 내용 출력
var greeting = `${string1} ${string2}`;
console.log(greeting);

var product = { name: '도서', price: '4200원' };
// 문자열 템플릿으로 변수의 내용 및 문자열을 연결
var message = `제품 ${product.name}의 가격은 ${product.price}입니다`;
console.log(message);

// 문자열 템플릿으로 이스케이프 문자없이 줄바꿈 문자열 표시
var multiLine = `문자열1
문자열2`;
console.log(multiLine);

var value1 = 1;
var value2 = 2;
var boolValue = false;
// ${} 를 사용하여 간단한 연산 가능
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `불리언값은 ${boolValue ? '참' : '거짓'}입니다.`;
