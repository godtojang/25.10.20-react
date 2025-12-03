// var : 함수스코프, 중복 선언 가능
// let : 블록스코프, 중복 선언 불가
// const : 블록스코프, 중복 선언 불가, 재할당 불가

if (true) {
  var x = 10
}

// console.log(x) 블록 밖에서도 보임

// 중복 선언이 가능한 게 문제
var a = 1
var a = 2

// 함수 스코프
function printA() {
  var z = 10
}

console.log(z) // z in not defined

// let, const
// 블록스코프
// {}로 감싼 블록 안에서만 유효함
if (true) {
  let x = 10
  const y = 20
}

// console.log(x) 에러 x is not defined
// console.log(y)

// 안 쪽 스코프에서 같은 이름의 변수를 새로 만들면
// 바깥 쪽 변수를 가리는 효과가 있음
let message = "밖이다"

function test() {
  let message = "안이다"
  console.log(message)
}
test() // 안이다
console.log("함수 밖 :", message)