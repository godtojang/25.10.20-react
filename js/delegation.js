// querySelectAll() : 해당되는 태그들을 모아서 htmlcollection을 반환
// 유사 배열 객체 -> 인덱스로 접근이 가능하나 실제 배열은 아님
const items = document.querySelectorAll("#todo-list li")

// forEach를 이용해 각각의 요소를 순회하는 것이 가능
// items.forEach((item) => {
//   item.addEventListener("click", function() {
//     console.log(item.textContent + '클릭됨')
//   })
// })

// 각각의 요소에게 이벤트를 달아주는 것은 비효율적임

// const todoList = document.querySelector("#todo-list")

// todoList.addEventListener("click", function(event) {
//   // 실제로 클릭 된 요소
//   const target = event.target

//   // 태그 이름 대문자로 작성
//   if (target.tagName === 'LI') {
//     const id = target.dataset.id // data-id의 값
//     const text = target.textContent // 항목 내용

//     console.log(`ID : ${id}, 내용 : ${text} 클릭됨`)
//   }
// })

// ul에 이벤트리스너 한 개만 있음
// <li>가 3개든 100개든, 나중에 js를 이용해서 추가하든 코드의 수정 없이 그냥 동작을 함
// 유지보수, 성능 면에서 훨씬 좋음

const todoList = document.querySelector("#todo-list")

todoList.addEventListener("click", function(event) {
  // li를 기준으로 가장 가까운 조상 찾기
  // 사용자가 클릭하는 위치가 다양함
  // <li>를 직접 누를 수도 있고
  // <span>을 누를 수도 있고
  // <button>을 누를 수도 있음
  // 클릭한 요소가 span이든, button이든, 텍스트든 상관없이 그 요소가 속한 li를 찾음
  const li = event.target.closest('li')

  // ul영역 바깥을 클릭한 경우를 방어
  // !todoList.contains(li)) : li를 찾긴 했는데, 그 li가 현재 ul 내부가 아닌 경우
  if (!li || !todoList.contains(li)) return

  const id = li.dataset.id //<li data-id="10">처럼 HTML에서 설정한 값을 불러옴

  // 삭제 버튼을 눌렀는지 판별
  if (event.target.matches('.delete-btn')) {
    console.log(`ID ${id} 항목 삭제`)
    li.remove()
    return
  }
  // 그 외 li영역 클릭 시
  console.log(`ID ${id} 항목 선택`)
})