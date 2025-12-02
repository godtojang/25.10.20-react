const nameInput = document.querySelector("#nameInput")
const fruitSelect = document.querySelector("#fruitSelect")
const memo = document.querySelector("#memo")
const form = document.querySelector("#myForm")
const msg = document.querySelector("#msg")

nameInput.addEventListener("focus", function() {
  msg.textContent = "이름 입력창에 포커스가 갔다"
})

nameInput.addEventListener("blur", function() {
  msg.textContent = "이름 입력창에 포커스가 벗어났다"
})

// change : 값이 바뀐 다음, 포커스를 잃을 때 발생
fruitSelect.addEventListener("change", function() {
  msg.textContent = `과일을 ${fruitSelect.value}로 변경했다`
})

form.addEventListener("submit", function(e) {
  e.preventDefault() // 실제로 서버로 보내는 동작을 막는다
  msg.textContent = "submit 이벤트가 발생했다"
})

form.addEventListener("reset", function() {
  msg.textContent = "reset 이벤트가 발생하여 form 값이 초기하 되었다"
})

// input / textarea에서 텍스트를 드래그로 선택했을 때
memo.addEventListener("select", function() {
  const start = memo.selectionStart
  const end = memo.selectionEnd
  const selected = memo.value.substring(start, end)
  msg.textContent = `select 이벤트 발생, 선택한 텍스트는 "${selected}"`
})