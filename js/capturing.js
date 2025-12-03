const parnet = document.querySelector("#parent")
const child = document.querySelector("#child")

// div를 클릭했을 때 '부모 div 클릭 이벤트 발생'
parent.addEventListener("click", function() {
  console.log("부모 div 클릭 이벤트 발생")
}, true // 캡처링 단계에서 실행
)

// 버튼을 클릭했을 때 "버튼 클릭 이벤트 발생"
child.addEventListener("click", function(event) {
  console.log("버튼 클릭 이벤트 발생")
})