let element = document.getElementById("p_id")

// style property
// element.style.backgroundColor = 'lightblue'
// element.style.color = 'red'
// element.style.fontSize = "30px"
// element.style.border = '2px solid black'
// element.style.display = 'block'
// element.classList.add('dark')
// element.classList.remove('dark')

// setAttribute vs classList

// setAttribute
// class값이 있다면 덮어쓰기
// class 전용이 아니라 다른 속성에도 사용이 가능

// classList
// 기존 클래스는 그대로 두고 추가가 되는 것
// class의 값을 바꿀 때는 classList를 쓰는 것이 안전

// 다중 속성 변경
// style.cssText
element.style.cssText =
  `color:white;
  background-color:black;
  padding:20px;
  border-radius:12px;`