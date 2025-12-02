// document 객체를 이용해서 HTML 태그를 선택하는 방법
// 1. getElementById(id값)

const titleEl = document.getElementById("title")
console.log(titleEl)

// 2. getElementsByClassName(클래스값)
// 같은 클래스를 가진 요소 전체를 HTMLCollection으로 반환
// HTMLCollection : HTML 요소들을 모아놓은 유사 배열타입
// index로 접근이 가능하고 length가 존재함
// map, filter와 같은 메서드는 사용할 수 없음

const items = document.getElementsByClassName("item")
// textContent : DOM 요소 안에 들어있는 "텍스트만" 읽거나
// 바꿀 때 사용하는 property
console.log(items[0].textContent)

// 3. getElementsByTagName(태그이름)
const firstMenu = document.getElementsByTagName("li")
console.log(firstMenu[0].textContent)

// 4. querySelector(css선택자)
// 일치하는 요소 중 첫 번째만 반환
const menu = document.querySelector(".menu")
console.log(menu.textContent)