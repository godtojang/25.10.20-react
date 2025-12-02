// v1이라는 이름의 변수를 선언하고
// 5라는 값을 변수에 대입을 한 상태
var v1 = 5;
// console.log(): 소괄호 안에 있는 내용을
// 화면에 출력하라는 의미
console.log(v1);

// ` -> 백틱 esc 밑에 있는 버튼
console.log(`var v1 = ${v1}`);
var v1 = 10;
console.log(`var v1 = ${v1}`);

// 변수에 다른 값을 대입하는 방법
v1 = 15;
console.log(`var v1 = ${v1}`);

let age = 20;
console.log(`let age = ${age}`);

// let은 같은 이름의 변수를 재 선언하는 것을 허락하지 않음
// let age = 30;

age = 30;
console.log(`let age = ${age}`);

// const
// 선언만 하는 것은 불가능
// const c;
// 초기화를 하는 것은 가능

const c = 100;
// 같은 이름의 변수 만드는 것 불가능
// const c = 50;
