let age = 21;
if (age >= 19) {
  console.log("성인이다")
}
console.log("프로그램 종료")

let isMember = false
if (isMember) {
  console.log('회원 전용 페이지에 입장 하였습니다.')
} else {
  console.log('로그인이 필요합니다.')
}

// 여러개의 조건을 비교하고 싶을 때
// 1. 논리 연산자 이용
let score = 80
let result = score < 0 && score > 100

// if - else if문 사용하기
if (score >= 90) {
  console.log("A")
} else if (score >= 80) {
  console.log("B")
} else if (score >= 70) {
  console.log("C")
} else if (score >= 60) {
  console.log("D")
} else {
  console.log("F")
}

// if문 끼리의 중첩
let loggedIn = true
let role = "admin"

if (loggedIn) {
  if (role === "admin") {
    console.log("관리자 페이지에 접근합니다.")
  } else {
    console.log("일반 사용자 페이지에 접근합니다.")
  }
} else {
  console.log("로그인이 필요합니다.")
}

// 조건문에서 자주 사용되는 패턴
// 1. 짝수, 홀수 판별할 때
// 숫자를 2로 나눈 나머지를 가지고 짝후, 홀수를 판단함
let x = 17;
if (x % 2 == 0) {
  console.log(`${x}은 짝수입니다.`)
} else {
  console.log(`${x}은 홀수입니다.`)
}

// 특정 배수 찾기
// 특정 값으로 나눠 나머지가 0이면 배수임을 알 수 있음
let num = 15
if (num % 3 == 0) {
  console.log(`${num}은 3의 배수이다.`)
}

if (num % 5 == 0) {
  console.log(`${num}은 5의 배수이다.`)
}

// 범위 판별
// 두 조건을 &&로 연결하는 패턴
age = 25;
// 25살이 20대인지 판별하여 "20대입니다" 라고 출력

if (age >= 20 && age < 30) {
  console.log(`${age}살은 20대 입니다.`)
} else {
  console.log(`${age}살은 20대가 아닙니다.`)
}

// 특정 문자의 포함여부
// 문자열.includes() 메서드를 사용하여 포함되어 있는지 확인
let email = "hello@gmail.com"
if (email.includes("@")) {
  console.log("올바른 이메일 형식이다.")
}