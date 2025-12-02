let i = 0 // 시작값

while (i < 3) {
  console.log(i)
  i++
}
// for문 : 내가 반복해야 하는 횟수를 정확히 알 때
// while문 : 내가 얼마나 반복해야 하는지 모를 때 사용하기 좋음

// break, continue
// break : 현재 반복을 종료하고 반복문을 빠져나감
// continue : 현재의 반복을 넘어가고 다음 반복을 실행함

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5에서 멈춘다")
    break; // 반복문 종료
  }
  console.log(i)
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    continue
  }
  console.log(i)
}

let num = 1
while (num <= 10) {
  if (num == 5) {
    console.log("5에서 종료한다")
    break
  }
  console.log(num)
  num++
}

let x = 1
while (x <= 10) {
  x++
  if (x % 2 != 0) {
    continue
  }
  console.log(x)
}