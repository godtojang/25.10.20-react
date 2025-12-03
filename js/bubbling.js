const parnet = document.querySelector("#parent")
const child = document.querySelector("#child")

// div를 클릭했을 때 '부모 div 클릭 이벤트 발생'
parent.addEventListener("click", function() {
  console.log("부모 div 클릭 이벤트 발생")
})

// 버튼을 클릭했을 때 "버튼 클릭 이벤트 발생"
// 이벤트 처리 함수의 매개변수로 발생한 이벤트의 정보를 받을 수 있음
// 매개변수의 이름은 아무거나 작성해도 상관 없음
child.addEventListener("click", function(event) {
  console.log("버튼 클릭 이벤트 발생")
  event.stopPropagation(); // 여기서 상위로 전파를 막음
})

// 실무에서는 팝업안에 있는 버튼 클릭 시, 배경 영역의 클릭 이벤트가 같이 실행되면
// 안 되는 경우에 자주 사용
// 버튼 안에 또 버튼이 있는 경우
