const commentList = document.querySelector("#comment-list")

commentList.addEventListener("click", function(event) {
  // 클릭 된 요소 기준으로 li 찾기
  const li = event.target.closest('li')
  if (!li || !commentList.contains(li)) return

  // 1) 삭제 버튼 눌렀을 때 삭제
  if (event.target.matches(".delete-btn")) {
    const id = li.dataset.id
    console.log(`댓글 ${id}삭제`)
    li.remove()
    return
  }

  // 2) 좋아요 버튼 클릭 처리
  const likeBtn = event.target.closest('.like-btn')
  if (likeBtn) {
    const countSpan = likeBtn.querySelector('.count')
    let count = Number(countSpan.textContent)
    count += 1
    countSpan.textContent = count
  }
})