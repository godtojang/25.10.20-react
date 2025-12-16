// 가입하기 버튼을 눌렀을 때 이름 입력 창에 내용이 입력이 안 되어 있다면
// small에 적힌 내용을 보이게 하기
// 한 글자라도 입력되면 다시 사라지게 하기
const nameInput = document.querySelector("#nameInput")
const passwordInput = document.querySelector("#passwordInput")

const nameError = document.querySelector("#nameError")
const passwordError = document.querySelector("#passwordError")

const signupBtn = document.querySelector("#signupBtn")
signupBtn.addEventListener("click", () => {
  if (nameInput.value.trim() === "") {
    nameError.style.display ="block"
  } else {
    nameError.style.display ="none"
  }
})

// 비밀번호의 길이가 8글자보다 적으면 에러미시지를 띄움
// 8글자보다 많으면 에러메시지를 숨김

if (passwordInput.value.length < 8) {
  passwordError.style.display = "block"
} else {
  passwordError.style.display = "none"
}

// 이메일이 형식에 맞는 지 검사
// 정규표현식(내가 정한 형식에 맞는 지 검사)
// /^[^\] $/;