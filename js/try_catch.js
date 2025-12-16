try {
  console.log("여기까지는 정상 실행임")
  JSON.parse("이건 JSON이 아님") // 에러발생 지점
  console.log("여긴 실행되지 않음")
} catch (error) {
  console.log("에러가 발생함")
  console.log("에러 메시지 : ", error.message)
}

// throw를 이용해서 "직접" 에러 발생시키기
// try / catch는 자바스크립트 내부 에러 뿐만 아니라
// 내가 직접 만든 에러도 잡을 수 있음

function divide(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없음")
  }
  return a / b
}

try {
  const result = divide(10, 0)
  console.log("결과 : " + result)
} catch (error) {
  console.log("에러 발생 : ", error.message)
}

// 폼 유효성 검사나, API 요청 전에 조건 체크할 때 자주 사용
function createUser(username, age) {
  if (!username) {
    throw new Error("이름은 필수로 입력해야 한다")
  }

  if (age < 0) {
    throw new Error("나이는 0 이상이어야 한다")
  }

  return {username, age}
}

try {
  const user = createUser("", -1)
  console.log(user)
} catch (error) {
  console.log("회원 생성 실패: ", error.message)
}

// finally
// 에러가 나든, 안 나든 무조건 실행되는 블록
try {
  console.log("작업 시작")
  // 어떤 작업을 함
  throw new Error("문제가 발생했다")
} catch (error) {
  console.log("에러 처리이다 :", error.message)
} finally {
  console.log("리소스 정리이다. (파일 닫기, 로딩 숨기기)")
}