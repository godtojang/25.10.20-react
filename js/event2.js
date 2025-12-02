let btn1 = document.getElementById('target1')
let btn2 = document.getElementById('target2')

function btn_listener(event) {
  switch(event.target.id) {
    case 'target1':
      alert(1)
      break
    case 'target2':
      alert(2)
      break
  }
}

btn1.addEventListener("click", btn_listener)
btn2.addEventListener("click", btn_listener)