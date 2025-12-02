const cal = document.querySelector("#cal")
const show = document.querySelector("#btn_show")

cal.addEventListener("click", function() {
  // 클릭한 시점의 태그들의 정보를 가져와야 함
  const dan = document.querySelector("#dan").value
  const gugudan = document.querySelector("#disp")


  if (dan.trim() == '') {
    alert("값을 입력하세요")
    return
  }
  if (dan < 2 || dan > 9) {
    alert("2 ~ 9 사이의 값만 입력하세요")
    return
  }

  let str = ""
  for (let i = 1; i <= 9; i++) {
    str += `${dan} x ${i} = ${dan * i}<br>`
  }

  gugudan.innerHTML = str
})

let b_show = true
show.addEventListener("click", function() {
  b_show = !b_show
  document.querySelector("#btn_show").value = b_show ? "숨기기" : "보이기"
  document.querySelector("disp").style.display = b_show ? "block" : "none"
})