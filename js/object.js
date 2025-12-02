// 객체
// 현실세계의 사물을 디지털(코드)로 표현하기 위한 방법
// 여러 데이터를 하나로 묶어서 저장하는 구조
// 예를 들어 사람의 정보를 변수로만 저장을 한다면 어떨까
let name = "홍길동"
let age = 20
let job = "개발자"

// person 하나만 보면 "이 사람의 정보"가 다 들어있다는 것을 알 수 있음
let person = {
  name: "홍길동",
  age: 20,
  job: "개발자"
}

// 객체의 기본 구조
/*
  let 객체이름 = {
    키1: 값1, -> property
    키2: 값2
    키3: 값3
}
*/
// 각각의 프로퍼티는 콤마로 구분
// 키는 따옴표로 묶지 않음

// 객체 값 꺼내기

// 1. 점 표기법
// 객체이름.키
console.log(person.name)

// 2. 대괄호 표기법
console.log(person["name"])

// new Object() -> 생성자
// 비어있는 객체 리터럴({ }) 을 만드는 것과 같음
let user = new Object()

// 없는 property에 값을 넣으면 추가
user.name = "김자바"
user.age = 20

console.log(user)
delete user.age

// in : 특정 property가 객체에 포함되어 있는지 검사하는 연산자
console.log('name' in user)

// for in
// 객체에 포함된 모든 property에 대해 순회
for (i in person) {
  console.log(`${i} = ${person[i]}`)
}

// 객체의 value로 또 다른 객체가 들어갈 수 있음
let circle = {
  center: {x: 1.0, y: 2.0},
  radius: 2.5
}
// 객체의 value에 또 다른 객체가 들어있을 때 value에 접근하는 방법
console.log(circle.center.x)

// 객체 안에 포함된 함수 -> 메서드
let member = {
  name: '민수',
  age: 20,
  // sayHello: function() { // 메서드를 정의
    // console.log('안녕하세요')
  // }
  sayHello() { // 축약문법
    console.log(`안녕하세요 저는 ${this.name}입니다`)
  },
  growOlder() {
    this.age++
    console.log(`이제 ${this.age}살이 되었습니다`)
  }
}
// this
// 호출한 자기 자신을 의미

// 메서드를 사용하기 위해서는 정의된 메서드를 호출해야 함
// 메서드를 호출하는 방법
// 객체이름.메서드명()
member.sayHello()
member.growOlder()

// calculator라는 이름의 객체를 만들어라
// add(a, b) : 두 수 a와 b를 더한 값 출력
// subtract(a, b) : 두 수 a와 b의 차를 출력
// multiply(a, b) : 두 수 a와 b의 곱을 출력
// divide(a, b) : 두 수를 나눈 값을 출력하되, b가 0이면 "0으로 나눌 수 없음" 출력

let calculator = {
  add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`)
  },
  subtract(a, b) {
    console.log(`${a} - ${b} = ${a - b}`)
  },
  multiply(a, b) {
    console.log(`${a} X ${b} = ${a * b}`)
  },
  divide(a, b) {
    if (b == 0) {
      console.log(`0으로 나눌 수 없음`)
    } else {
      console.log(`${a} % ${b} = ${a / b}`)
    }
  }
}

calculator.add(10, 7)
calculator.divide(10, 0)

// 배열을 인자로 전달하여 평균을 반환하는 arrayAvg함수 작성
// 인자로 전달된 값이 배열이 아니거나 길이가 0이면 0을 반환
// Array.isArray(배열) -> 배열인지 아닌지 판단
// 배열.length -> 배열의 길이

function arrayAvg(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return 0
  }

  let sum = 0
  for (let i = 0; i < data.length; i++) {
    sum += data[i]
  }

  return sum / data.length
}

console.log(arrayAvg([1, 2, 3]))

// 사용자 정보 관리 객체 만들기
// userManager라는 객체를 만듦
// 이 객체는 배열과 메서드를 이용해서 사용자 정보를 관리
// 속성 : users 사용자 목록을 담는 배열 각 요소는 {name,age} 형태의 객체
// 메서드 :
// - addUser(name, age) : 이름과 나이를 받아 배열에 새 사용자 객체를 추가하고
// "사용자 추가: 이름(나이)"를 출력
// - printAll() : users배열에 있는 모든 사용자의 이름과 나이를 한 줄씩 출력
// - findUser(name) : 이름이 일치하는 사용자를 찾아 "찾음 : 이름(나이)"를
// 출력하고 없으면 "사용자를 찾을 수 없음"을 출력

const userManager = {
  users: [],
  addUser(name, age) {
    this.users.push({name, age})
    console.log(`사용자 추가: ${name}(${age})`)
  },
  printAll() {
    if (this.users.length === 0) {
      console.log("등록된 사용자가 없음")
      return
    }
    this.users.forEach(user => console.log(`${user.name}(${user.age})`))
  },
  findUser(name) {
    const found = this.users.find(user => user.name === name)
    if (found) {
      console.log(`찾음 : ${found.name}(${found.age})`)
    } else {
      console.log("사용자를 찾을 수 없음")
    }
  }
}

userManager.addUser("홍길동", 20)
userManager.addUser("김영희", 25)
userManager.printAll()
userManager.findUser("김아무개")