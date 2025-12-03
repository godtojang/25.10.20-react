const double = (x) => {return x * 2}

// 중괄호가 없으면 결과가 자동으로 return 됨
const doubleShort = x => x * 2

// 매개변수가 없으면 소괄호를 무조건 써야 함
const getRandom = () => Math.random()

// 객체 리터럴을 반환할 때 객체를 소괄호로 감싸야 함
const makeUser = (name, age) => ({name: name, age: age})

// 단축 프로퍼티
// key와 value가 동일한 변수명일 때 단축이 가능
const makeUserShort = (name, age) => ({name, age})

// this : 객체 자기 자신
const user = {
  name: '홍길동',
  // sayHello: function() {
  //   console.log(`안녕 나는 ${this.name}이다`)
  // }
  sayHello : () => {
    console.log(`안녕 나는 ${this.name}이다`)
  }
}

user.sayHello()

// 메서드 부분에서는 일반 function을 쓰는 것을 추천
// 나머지 부분에서는 화살표 함수를 사용하는 것이 편함

// 화살표 함수와 arguments
// 일반 함수는 내부에서 arguments라는 유사 배열을 쓸 수 있음
function normalFn() {
  console.log(arguments)
}

normalFn(1, 2, 3)

// 화살표 함수는 arguments를 가지지 않음

// const arrowFn = () => {
//   console.log(arguments)
// }

// arrowFn(1, 2, 3)

// 대신 나머지 매개변수를 주로 씀
// ...매개변수
const sum = (...nums) => {
  return nums.reduce((acc, cur) => acc + cur, 0)
}

console.log(sum(1, 2, 3, 4))

// 화살표 함수를 사용하기 좋은 곳
// 1. 콜백함수 : 어떤 함수가 실행 된 다음에 실행되는 함수
// 배열에서의 map, filter, reduce 함수에 사용되는 함수
// 2. 이벤트 처리에서 사용

// 일반함수를 화살표 함수로 바꿔보기
// function greet(name) {
//   return "안녕, " + name +"이다"
// }

const greet = name => "안녕, " + name +"이다"

console.log(greet("홍길동"))

const nums = [1, 2, 3, 4, 5, 6, 7]
// 홀수만 고르고 홀수들을 제곱한 새로운 배열 만들기
// filter, map을 메서드 체이닝으로 만들기
const newNums = nums.filter(x => x % 2 != 0).map(x => x * x)
console.log(newNums)

// 원하는 숫자를 여러 개 넣으면 그 숫자들의 합을 반환하는 total 화살표 함수 만들기
const total = (...nums) => nums.reduce((acc, cur) => acc + cur, 0)
console.log(total(1, 2, 3))