const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("데이터 로드 완료")
  }, 2000)
})

p.then(msg => {
  console.log(msg)
})

// .then() 메서드는 메서드 체이닝으로 이어붙일 수 있음
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

.then(num => {
 console.log("1차 결과 : ", num)
 return num + 1
})

.then(num => {
  console.log("2차 결과 : ", num)
  return num * 3
})