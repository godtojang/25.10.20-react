const box = document.querySelector("#box")

box.addEventListener("click", function() {
  box.textContent = "click 이벤트가 발생했다"
})

box.addEventListener("dblclick", function() {
  box.textContent = "dblclick 이벤트가 발생했다"
})

box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "lightyellow"
})

box.addEventListener("mouseout", function() {
  box.style.backgroundColor = ""
})

box.addEventListener("mousedown", function() {
  box.style.backgroundColor = "red"
  box.textContent("마우스를 누르고 있는 중")
})