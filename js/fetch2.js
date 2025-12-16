async function loadUsers() {
  const list = document.querySelector("#userList")
  list.innerHTML = "";
try {
  const res = await fetch ("https://jsonplaceholder.typicode.com/users")
  if (!res.ok) {
    throw new Error("서버 오류")
  }
  // json으로 변환
  const users = await res.json()

  users.forEach(user => {
    // html요소로 변환하여 화면에 표시
    const li = document.createElement("li")
    li.textContent = `${user.id}. ${user.name}(${user.email})`
    list.append(li)
  })

  } catch (err) {
    list.innerHTML = `<li>데이터 불러오기 실패</li>`
    console.log(err)
  }
}



document.querySelector("#loadBtn").addEventListener("click", loadUsers)