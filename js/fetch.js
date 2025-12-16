// fetch의 기본 형태
// fetch(url)
// .then(response => response.json()) JSON으로 변환
// .then(data => consolg.log(data)) 실제 데이터 사용
// .catch(err => console.log(err)) 에러 처리

// fetch(url, 옵션)
/*
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify ({
      title: "공부하기",
      done: false
    })
  })
    .then(response => response.json()) JSON으로 변환
    .then(data => consolg.log(data)) 실제 데이터 사용
*/

// 사용자 목록 가져오기
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  console.log(users)
}

getUsers()