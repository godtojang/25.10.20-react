// 1. 명시적 형변환
// 형변환 함수를 이용
// 문자열 타입의 데이터를 정수로 바꿀 때
// Number(데이터)
console.log(typeof Number("123"))
console.log(typeof Number("3.14"))
console.log(typeof Number("     10     "))
console.log(typeof Number("abc")) // NaN
console.log(typeof Number("")) // 0
console.log(Number(true)) // 1
console.log(Number(false)) // 0

// parseInt() / parseFloat()
// 문자열에서 숫자 부분만 앞에서부터 잘라서 숫자로 만듦
console.log(parseInt("123px"))
console.log(parseInt("abc123"))

// String()
// 문자열로 만들어주는 함수
console.log(String(123)) // "123"
console.log(String(3.14)) // "3.14"

// Boolean()
// 어떤 값이든 boolean타입의 데이터로 바꿔줌
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean("hello")) // true
console.log(Boolean("")) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false

// 암시적 형변환
// 자바스크립트가 연산을 수행하기 위해 타입을 자동으로 바꾸는 경우
// 편리하기도 하지만, 버그의 원인이 되기도 함
// 문자열 + 숫자 => 문자열
console.log("10" + 20)
console.log(10 + "20")
console.log("hello" + 1) // hello1

// -, *, / 는 숫자 연산을 시도함
console.log("10" - 2) // 8
console.log("10" * 2) // 20
console.log("10원" - 2) // NaN