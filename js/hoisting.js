// 자바스크립트 엔진이 내부적으로 선언을 먼저 함
// var a
console.log(a) // undefined
var a = 10
console.log(a)

console.log(x)
let x = 10

console.log(y)
const y = 20

// 함수 선언식 방식은 위에서 호출해도 정상 동작
sayHello()

// 함수의 호이스팅
// 함수의 선언식이 통째로 호이스팅이 돼서 그렇다
// function sayHello() {
//   console.log("안녕하세요")
// }

// 함수 표현식은 위에서 호출할 수 없음
// 변수 선언 + 값의 할당
// 호이스팅 시점에서는 변수는 존재하지만 값은 없는 상태
// const sayHello
const sayHello = function() {
  console.log("안녕하세요")
}