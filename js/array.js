let arr = []
let arr2 = [1, 2, 3, 4]
let mixed = ['a', 1, true]

// 생성자를 통한 생성
// 생성자 : 생성하는 기능이 있는 특수한 함수
let ar = new Array(3)
console.log(arr)
console.log(ar)

// length(길이) : 배열에서의 요소의 개수
// 요소에 접근 : 배열명[index번호]
console.log(arr2[1])
console.log(arr2.length)

let x = [1, 2, 3]
// x[5] = 6
console.log(x)
console.log(x.length)

// push()
// 배열 맨 뒤에 추가하는 메서드
x.push(4)
// unshift()
// 배열 맨 앞에 추가하는 메서드
x.unshift(0)
console.log(x)
// pop()
// 배열 맨 뒤 요소 삭제
x.pop()
// shift()
// 배열의 맨 앞에 있는 요소를 삭제
x.shift()
console.log(x)
// splice(시작 인덱스, 삭제 개수) : 인덱스부터 요소를 삭제
var a = [1, 2, 3]
a.splice(1, 1)
console.log(a)
// splice(시작 인덱스, 삭제 개수, ...넣고 싶은 데이터들)
a.splice(1, 0, 2, 2.5)

// 배열의 순회
// 배열의 전체 요소를 훑어본다
// for
for(let i = 0; i < a.length; i++) {
  console.log(a[i])
}

// for of
let iArr = [3, 7, 11, 15]
for(let v of iArr) {
  console.log(v)
}

// forEach
iArr.forEach(v => console.log(v))

// map
// 배열에 모든 요소에 연산을 한 후
// 새롭게 배열을 반환
var result = iArr.map(v => v * 2)
console.log(result)

// filter
// 조건을 통과한 요소만 모아서 새로운 배열로 만듦
var result = iArr.filter(v => v % 2 == 0)
console.log(result)

// reduce
// 배열을 하나의 값으로 누적함
let ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = ar2.reduce((sum, v) => sum + v, 0)
console.log(result)

// 정렬
console.log([10, 2, 5].sort((a, b) => a - b))