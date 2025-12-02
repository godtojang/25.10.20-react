// while문은 조건을 검사한 다음에 반복을 실행
// do-while문은 조건에 맞지 않아도 무조건 한 번은 수행을 함

let num = 10
do {
  console.log(num)
  num++
} while (num < 10)

// 1 ~ 27까지 숫자 중 짝수의 개수와 홀수의 개수를 각각 출력
let i = 1
let odd = 0
let even = 0
while (i < 28) {
  if (i % 2 == 0) {
    even++
    i++
  }
  odd++
  i++
} console.log(`홀수의 개수는 ${odd}, 짝수의 개수는 ${even}`)

for (let x = 1; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    if (y % 2 == 0) {
      y++
    }
    console.log(`${x} x ${y} = ${x * y}`)
  }
}

// 1부터 45까지 3의 배수를 제외하고 합계와 평균 구하기
let sum = 0
let avg = 0
let count = 0
for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0) {
    continue
  }
  sum += i
  count++
}
avg = sum / count
console.log(`합계는 ${sum} 평균은 ${avg}`)

let n = 3245
let revers = 0

while (n > 0) {
  let digit = n % 10
  revers = revers * 10 + digit
  n = Math.floor(n / 10) // 맨 뒷자리 제거
}

console.log(`뒤집은 숫자 : ${revers}`)