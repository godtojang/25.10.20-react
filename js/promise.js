// 콜백함수 만으로 비동기처리를 하다보면 콜백 지옥 문제가 생김
setTimeout(() => {
	console.log("1번 읽기 완료")
	setTimeout(() => {
		console.log("2번 읽기 완료")
		setTimeout(() => {
			console.log("3번 읽기 완료")
		}, 1000)
	}, 1000)
}, 1000)

// ES6에서 Promise가 등장
// Promise는 비동기 코드를 동기 흐름처럼 읽히게 만드는 객체
// 지금은 결과를 모르는 작업, 나중에 알려준다 약속(Promise)하는 객체

// Promise는 생성할 때 반드시 실행 함수를 넣음
// 이 함수는 resolve(성공), reject(실패) 두 가지 매개변수를 가짐

// const promise = new Promise((resolve, reject) => {
	// 비동기 작업을 수행
// 	if (성공조건) {
// 		resolve(결과값)
// 	} else {
// 		reject(에러메시지)
// 	}
// })

// Promise의 상태는 3가지
// pending : 대기중
// fulfilled : resolve가 호출
// rejected : reject가 호출

const myPromise = new Promise((resolve, reject) => {
	resolve("성공이다")
})
// Promise의 상태가 pending -> fulfilled로 바뀜
// them의 첫 번째 콜백으로 값이 전달됨
myPromise.then((msg) => {
	console.log(msg)
}).catch(() => {})