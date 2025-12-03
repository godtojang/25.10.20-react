// 명령형 스타일
let sum = 0
for (let i = 1; i <= 5; i++) {
	const squared = i * i
	sum += squared
}

console.log(sum)

// 어떻게 할 지에 초점이 맞춰져 있는 코드
// 

// 함수형 스타일
const numbers = [1, 2, 3, 4, 5]

const sumOfsquares = numbers.map(n => n * n) // 각 숫자를 제곱한 새 배열을 생성
	.reduce((acc, n) => acc + n, 0) // 모두 더하기

console.log(sumOfsquares)

// 무엇을 할 지에 초점이 맞춰진 코드
// numbers 배열은 건드리지 않고, 새 값을 만들어서 넘겨줌

// 순수함수
// 같은 입력을 넣으면 항상 같은 출력이 나오는 함수
// 함수 밖의 상태를 변경하지 않고, 함수 밖의 상태에 의존하지 않음

function add(a, b) {
	return a + b
}

// 같은 값을 넣으면 항상 같은 값이 나옴

// function count() {
// 	count++
// 	return count
// }

// console.log(count())
// console.log(count())

// 테스트하기가 어렵고, 버그 추적이 힘듦
// 실무에서는 비즈니스 롲기은 최대한 순수함수로 분리하고
// 입출력, API호출, DOM조작같은 부분만 "껍데기"부분에서 처리하는 식으로 설계

// 불변성
// 함수평 프로그래밍에서는 원본 데이터를 직접 바꾸지 않고, 복사본이나 새 값을 만들어 사용하는 것을 선호

const numbers2 = [1, 2, 3]

numbers2.push(4) // 원본 배열에 4를 추가
console.log(numbers2) // [1, 2, 3, 4]

// 동작에는 문제 X, 프로젝트가 커지면 어디서 배열이 바뀐건지 추적하기 어려움

const numbers3 = [1, 2, 3]
const newNumbers = [...numbers3, 4] // 복사본에 새 값을 추가

console.log(numbers3)
console.log(newNumbers)

const users = [
	{name: "kim", age: 20},
	{name: "Lee", age: 30}
]

// 나이만 +1을 한 새 배열을 만든다

// const olderUsers = user.map(user => ({...user, age: user.age + 1}))
// console.log(users[0].age)
// console.log(olderUsers[0].age)

// 이 함수는 절대 외부 데이터를 건들지 않는다고 믿고 사용할 수 있음

// 배열에서 자주 쓰는 함수형 메서드
// map()
// 각 요소를 변환해서 새 배열을 만드는 메서드

const person = [
	{id: 1, name: 'kim'},
	{id: 2, name: 'lee'}
]

const options = person.map(person => ({label: person.name, value: person.id}))

// const options = 
// [{label: "kim", value: 1}, {label: "lee", value: 2}]
console.log(options)

// filter()
// 조건을 만족하는 요소만 골라서 새 배열을 만드는 메서드
const products = [
	{name: "노트북", price: 1500000, soldOut: false},
	{name: "마우스", price: 20000, soldOut: true},
	{name: "키보드", price: 150000, soldOut: false}
]

// 품절이 아닌 상품만 availableProducts에 넣기
const availableProducts = products.filter(p => !p.soldOut)
console.log(availableProducts)

// reduce
// 배열을 하나의 값으로 만드는 메서드

const carts = [
	{name: "노트북", price: 1500000, quantity: 1},
	{name: "마우스", price: 20000, quantity: 2},
	{name: "키보드", price: 150000, quantity: 3}
]

// 카트에 들어있는 모든 상품의 총 합계
const cartTotal = carts.reduce((total, cartItem) => {
	const itemTotal = cartItem.price * cartItem.quantity
	return total + itemTotal
}, 0)

console.log(cartTotal)

// 숫자를 두 배로 만들기
const double = x => x * 2
// 1을 더하는 함수
const increment = x => x + 1

// 2를 곱하고 1을 더하는 작업을 하고싶다면 두 함수를 합성해서 쓸 수 있음
const result = increment(double(5))

// 조금 더 일반적인 함수
// 함수들을 여러 개 받아 -> 하나의 함수로 합쳐주는 고차함수
// ...fns -> compose에 넘긴 모든 인자를 배열로 모아서 fns에 넣음
// reduceRight -> 배열의 오른쪽에서 왼쪽 방향으로 순회하면서 값을 누적시키는 함수
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

const doubleThenIncrement = compose(increment, double)

console.log(doubleThenIncrement(5))