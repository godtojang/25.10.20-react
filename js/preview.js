const input = document.querySelector("#search-input")
const preview = document.querySelector("#preview")
const recentList = document.querySelector("#recent-list")
const addRecentbtn = document.querySelector("#add-recent")

// 1) 입력할 때마다 실시간 미리보기
input.addEventListener("input", function(event) {
  const value = event.target.value.trim()

  if (value === '') {
    preview.textContent = '검색어 미리보기 : (없음)'
  } else {
    preview.textContent = `검색어 미리보기 : ${value}`
  }
})

// 2) 버튼을 누르면 현재 검색어를 최근 검색어 목록에 추가
addRecentbtn.addEventListener("click", function() {
  // input 태그에 적힌 내용을 value에 담음
  const value = input.value.trim()
  // value의 내용이 비어있다면 함수 종료
  if (value === '') return

  // <li></li>태그를 하나 만듦
  const li = document.createElement('li')
  // 태그에 value값을 넣음
  li.textContent = value
  // <ul>에 자식요소로 넣음
  recentList.prepend(li)
})

// 3) 최근 검색어 목록 클릭 시 -> 이벤트 위임
recentList.addEventListener("click", function(event) {
  // event가 발생한 li
  const li = event.target.closest('li')
  if (!li) return

  const keyword = li.textContent
  input.value = keyword
  preview.textContent = `검색어 미리보기 : ${keyword}`
})