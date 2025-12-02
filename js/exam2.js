let totalBall = 25
let boxCapacity = 4
let remain = totalBall % boxCapacity
let boxCount = (remain === 0) ? totalBall / boxCapacity : Math.floor(totalBall / boxCapacity) + 1

console.log(boxCount)

let age = 17;
let ticketPrice = 12000
let finalPrice = age < 19 ? ticketPrice * 0.8 : ticketPrice

console.log(finalPrice)

let price = 28000
let isVip = true;
let isFree = (price >= 30000 || isVip === true)

console.log(isFree)

let temperature = 23;
let mode = temperature >= 28 ? "에어컨 작동" : temperature <= 18 ? "난방 작동" : "대기상태"
console.log(mode)