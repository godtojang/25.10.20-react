// catch()의 의미
// 실패했을 때 실행

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("서버 응답 실패")
  }, 1000)
})

promise.then(data => console.log(data)).catch(err => console.log("에러 발생 : " + err))
// 실무에서 사용하는 패턴
// 성공과 실패를 따로 처리