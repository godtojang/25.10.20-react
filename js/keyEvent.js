const input = document.querySelector("#input")
const log = document.querySelector("#log")

// 키다운 이벤트가 실행되면
// 브라우저는 이벤트 정보를 담은 객체를 생성
// 우리가 등록한 함수에 그 객체를 전달하여 호출
// event 객체 안에 key라는 property가 있음
// 누른 키 값을 가지고 있음

input.addEventListener("keydown", function(event) {
  log.textContent = `keydown : ${event.key}키를 눌렀다`
})

input.addEventListener("keyup", function(event) {
  log.textContent = `keyup : ${event.key}키를 뗐다`
})