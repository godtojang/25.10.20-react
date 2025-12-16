// 함수 앞에 async 키워드를 붙이면 무조건 Promise 객체를 반환하는 함수가 됨
async function getData() {
  return "안녕" // 자동으로 Promise.resolve("안녕")이 됨
}

const p = getData()
console.log(p)

// 함수가 정상적으로 종료되면 Promise.resolve(값)으로 처리됨

// async함수에서 에러가 발생하거나 throw하면 Promise.reject가 됨
async function willFail() {
  throw new Error("문제가 발생했습니다")
}

willFail().then(() => {
  console.log("성공했습니까?")
}).catch(err => {
  console.log("에러 잡힘 : ", err.message)
})