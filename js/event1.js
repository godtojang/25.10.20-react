// html 요소에 속성을 통해서 이벤트 처리를 하는 방법
// HTML 코드와 JS코드가 섞여서 유지보수가 힘들다
// 함수에 의존
function handleClick() {
  alert("버튼 클릭됨")
}

// DOM 속성으로 이벤트 처리를 하는 방식
let btn = document.getElementById("btn")
btn.onclick = handleClick

// addEventListener로 이벤트를 등록하는 방식
let btn2 = document.getElementById("btn2")

// target.addEventListener(type, listener)
// type: "click", "input", "keydown" 같은 이벤트 이름
// lister: 이벤트가 발생했을 때 실행 할 기능(함수)
btn2.addEventListener("click", function() {
  alert("버튼이 클릭되었습니다")
})