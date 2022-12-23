import React from "react";
import $ from 'jquery';

// Promise : ES6에서 비동기 함수를 동기처리하기 위해서 고안된 객체

// 프로미스에는 pending, fulfilled, rejected 3가지 상태가 존재함
// pending : 대기 상태, 비동기 함수가 실행되고 아직 처리가 완료되지 않은 상태
// fulfilled : 완료 상태, 비동기 함수가 실행된 후 정상적으로 처리가 완료된 상태
// rejected : 거부 상태, 비동기 함수가 실행된 후 오류가 발생한 상태

// 프로미스 실행 시 콜백함수가 실행되고 해당 콜백함수의 매개변수로 resolve(), reject() 이라는 함수가 제공됨
// resolve(매개변수) : 프로미스를 실행 후 fulfilled 상태일 경우 실행하는 함수로 나중에 then()함수를 제공함
// reject(매개변수) : 프로미스를 실행 후 rejected 상태일 경우 실행하는 함수로 나중에 catch()함수를 제공함

// 프로미스에는 완료 및 오류 처리를 위해서 then(), catch() 함수를 제공하고 있음
// then(매개변수) : 비동기 함수 실행이 완료된 후 실행되는 함수
// catch(매개변수) : 비동기 함수 실행이 거부된 후 실행되는 함수

// 사용법 :
// function 프로미스를 사용할 함수명(매개변수) {
//   return new Promise(function(resolve, reject) {
//     비동기 통신 소스 ...
//     비동기 통신 결과에 따라
//     resolve();
//     reject();
//   });
// }

// 프로미스를 사용한 함수명()
// .then(function(매개변수)) {
//   실행할 소스
// }
// .catch(function(매개변수)) {
  // 실행할 소스
// }

function getData() {
  return new Promise((resolve, reject) => {
    const data = 100;
    resolve(data);
  });
}

getData()
  .then((data) => console.log(`프로미스 사용 반환값 : ${data}`));


const getData1 = () => new Promise((resolve, reject) => {
  $.ajax({
    url: 'http://localhost:8080/async/data1',
    type: 'post',
    success:(function() {
      // alert("jquery ajax 통신 성공");
      resolve("통신 성공");
    }),
    error:(function () {
      alert("오류 발생");
      reject("오류 발생");
    })
  });
});

export {getData, getData1};
