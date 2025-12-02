for (let i = 0; i < 3; i++) {
  console.log(i)
}

for (let x = 5; x > 0; x--) {
  console.log(x)
}

for (let y = 6; y >= 1; y--) {
  document.write(`<h${y}>자바스크립트</h${y}>`)
}

document.write("<hr>")
// 순서가 없는 리스트 그려보기
document.write("<ul>")
for (let z = 0; z < 3; z++) {
  document.write(`<li>ㅎㅇ</li>`)
}
document.write("</ul>")

document.write("<hr>")
for (let x = 1; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    document.write(`${x} x ${y} = ${x * y}<br>`)
  }
}