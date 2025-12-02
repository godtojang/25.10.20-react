// 변수 month에 월(月)값을 하나 저장하고,
// 해당 월이 몇 일까지 있는지 출력하는 코드 작성
// 예를 들어, 2월이라면 "2월은 28일 또는 29일까지 있습니다."
// 4월이라면 "4월은 30일까지 있습니다."

let month = 12

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log(`${month}월은 31일까지 있습니다.`)
    break;
  case 2:
    console.log(`${month}월은 28일 또는 29일까지 있습니다.`)
    break;
  case 4: case 6: case 9: case 11:
    console.log(`${month}월은 30일까지 있습니다.`)
    break;
  default:
    console.log("잘못된 숫자입니다.")
}

// score 변수에 점수를 입력받아 등급을 출력하는 코드 작성하기
// 100 ~ 90: A, 89 ~ 80: B, 79 ~ 70: C, 69 ~ 60: D, 그 외: F
// 점수가 0 ~ 100 범위를 벗어나면 "유효하지 않은 점수입니다"를 출력하기

let score = 95

if (score > 100 || score < 0) {
  console.log("유효하지 않은 점수입니다.")
} switch (true) {
  case (score >= 90):
    console.log("A")
    break;
  case (score >= 80):
    console.log("B")
    break;
  case (score >= 70):
    console.log("C")
    break;
  case (score >= 60):
    console.log("D")
    break;
  default:
    console.log("F")
}

// menu라는 변수에 메뉴 번호를 대입
// 음료를 선택하면 가격을 출력하는 코드 작성
// 메뉴
// 1 : 아메리카노 1500원
// 2 : 라떼 2000원
// 3 : 녹차 1800원

let menu = 2

switch (menu) {
  case 1:
    console.log(`아메리카노의 가격은 1500원 입니다.`)
    break;
  case 2:
    console.log(`라떼의 가격은 2000원 입니다.`)
    break;
  case 3:
    console.log(`녹차의 가격은 1800원 입니다.`)
    break;
  default:
    console.log("잘못 입력하였습니다.")
}

// hour 변수에 0 ~ 23사이의 시간을 대입하고 시간에 따라 인사를 출력
// 규칙
// 5 ~ 11 : 좋은 아침입니다.
// 12 ~ 17 : 좋은 오후입니다.
// 18 ~ 21 : 좋은 저녁입니다.
// 그 외 : 좋은 밤입니다.
// 범위를 벗어남 : "유효하지 않은 시간입니다."
let hour = 6

if (hour > 23 || hour < 0) {
  console.log("유효하지 않은 시각입니다.")
} else if (hour >= 5 && hour <= 11) {
  console.log("좋은 아침입니다.")
} else if (hour >= 12 && hour <= 17) {
  console.log("좋은 오후입니다.")
} else if (hour >= 18 && hour <= 21) {
  console.log("좋은 저녁입니다.")
} else {
  console.log("좋은 밤입니다.")
}

let year = 2025

if (year % 4 == 0 && year % 100 !==0 || year % 400 == 0) {
  console.log(`${year}년은 윤년입니다.`)
} else {
  console.log(`${year}년은 평년입니다.`)
}
