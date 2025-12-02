// 정수 배열 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 짝수만 골라 두 배로 만든 새 배열을 반환

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = [] // 결과를 담을 배열

// 배열의 전체 요소를 순회하며 짝수를 찾음
for(let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    result.push(arr[i])
  }
}

for(let i = 0; i < result.length; i++) {
  result[i] *= 2
}

console.log(result)

// -----------------------------------------
// 메서드체이닝
// 메서드를 .으로 나열하여 작성
// 메서드 체이닝이 되는 조건
// 메서드의 실행 결과가 다시 객체(또는 배열)을 반환해야 함
var result = arr.filter(v => v % 2 == 0).map(v => v * 2)
console.log(result)

// 점수 배열 [100, 98, 58, 71, 26, 50, 39, 45]의 평균
var arr = [100, 98, 58, 71, 26, 50, 39, 45]
var avg = 0
var sum = arr.reduce((s, v) => s + v, 0)
avg = sum / arr.length
console.log(avg)

// 배열 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]의 총합
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = arr.reduce((sum, v) => sum + v, 0)
console.log(result)

// ["apple", "kiwi", "banana", "pear", "grape", "plum"] 배열에서
// 5글자 이상인 과일만 골라 longWords라는 배열에 넣기
var fruit = ["apple", "kiwi", "banana", "pear", "grape", "plum"]
let longWords = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length >= 5) {
    longWords.push(arr[i])
  }
}

longWords = arr.filter(v => v.length >= 5)

// 정수 배열 [1, 2, 2, 3, 4, 4, 5, 5, 5]에서 중복된 숫자 제거
var arr = [1, 2, 2, 3, 4, 4, 5, 5, 5]
var uniqueNumbers = []
for (let v of arr) {
  let current = v
  if (!uniqueNumbers.includes(current)) {
    uniqueNumbers.push(current)
  }
}
console.log(uniqueNumbers)