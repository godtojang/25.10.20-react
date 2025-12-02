let a = true
let b = false
let andResult = a && b // false
console.log(andResult)
let orResult = a || b // true
let notResult = !a // false

let x = 10
let y = 5

// AND : 앞이 false면 뒤는 실행하지 않음
let result1 = x < y && (x += 1) > y
// OR : 앞이 true면 뒤는 실행하지 않음
let result2 = x > y || (x += 1) > y