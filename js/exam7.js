// 가상의 서버 역할 -> jsonplaceholder
// 요청 주소 -> 'https://jsonplaceholder.typicode.com/posts/1`
const loadPostBtn = document.querySelector("#loadPostBtn")
const resultDiv = document.querySelector("#result")
// 버튼을 눌렀을 때 jsonplaceholder에게 게시글 1건을 달라고 요청하여
loadPostBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => {
    resultDiv.innerHTML = `
      <p><strong>ID: </strong>${data.id}</p>
      <p><strong>제목: </strong>${data.title}</p>
      <p><strong>내용: </strong>${data.body}</p>
    `
  })
})
// json()메서드가 parse()와 같은 역할을 함
// ID : xxx
// 제목 : xxx
// 내용 : xxx
// 형태로 출력하기

// 버튼을 눌렀을 때 게시글 5개의 제목만 리스트의 li로 넣기
// 요청주소 https://jsonplaceholder.typicode.com/posts?_limit=5

const loadPostsBtn = document.querySelector("#loadPostsBtn")
const postsList = document.querySelector("#postsList")

loadPostsBtn.addEventListener("click", () => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(res => res.json())
  .then(posts => {
    postsList.innerHTML = ""

    posts.forEach(post => {
      const li = document.createElement("li")
      li.textContent = post.title
      postsList.appendChild(li)
    })
  })
})