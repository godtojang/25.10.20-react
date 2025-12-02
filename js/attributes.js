// input 태그를 선택
// queryselector를 이용해 선택
let input = document.querySelector("#user")
console.log(input)

// hasAttribute(속성이름)
// DOM 요소가 해당 속성을 가지고 있는 지 검사
console.log(input.hasAttribute("placeholder")) // true
console.log(input.hasAttribute("readonly")) // false

// getAttribute(속성명)
// DOM 요소가 가지고 있는 속성 값 반환
console.log(input.getAttribute("type")) // text

// setAttribute(속성, 값)
// DOM 요소에 속성을 추가하거나 이미 있다면 값을 수정
input.setAttribute("value", "안녕하세요")

// removeAttribute(속성명)
// 특정 속성을 제거
let btn = document.querySelector("#btn")
btn.removeAttribute("disabled")