// const regex = /hello/
// /와 /사이에 패턴을 넣음

// 기본 문자와 메타문자 익히기
// /abc/ -> 문자열에 abc라는 글자가 순서대로 들어 있는지 찾음
console.log(/hello/.test("hello world"))
console.log(/hello/.test("hi"))
// /./ 아무 문자 한 글자(줄바꿈 문자 제외)
// /a.c/ : a + 아무 문자나 한 글자 + c로 이루어진 문자열을 찾습니다.
console.log(/a.c/.test("abc")) // true
console.log(/a.c/.test("ac")) // false
//  /[abc]/ : a 또는 b 또는 c 중에 한 글자를 의미함
console.log(/[abc]/.test("apple"))
console.log(/[abc]/.test("desk"))
// [0-9] : 0부터 9까지
// [a-z] : a부터 z까지
// [A-Z] : A부터 Z까지
// [가-힣] : 한글 한 글자를
// [0-9a-zA-Z가-힣]

// 반복을 표현하는 기호
// /a*/ : a가 0번 이상 반복 (없어도 되고 있어도 됨)
/a*/.test("") // true
/a*/.test("aaaaa") // true
// /a+/ : 최소 1번 이상
/a+/.test("") // false
/a+/.test("aaaa") // true
// /colou?r/ : color 또는 colour 둘 다 허용(없거나 1개)
console.log(/colou?r/.test("color"))
console.log(/colou?r/.test("colour"))
console.log(/colou?r/.test("colouur"))

// /a{n}/ : 정확히 n번
// /a{n, m} : n번 이상 m번 이하
// /a{n,}/ : n번 이상

// 시작과 끝을 지정
// ^ : 문자열의 시작
// $ : 문자열의 끝
// /^abc/ : abc로 시작하는 문자열
// /abc$/ : abc로 끝나는 문자열
// /^abc$/ : 딱 abc 하나만 있는 문자열
console.log(/^abc/.test("abcdef"))
console.log(/abc$/.test("abcdef"))
console.log(/^abc$/.test("abcdef"))

// /^$/ : 전체 형식 검사를 할 때 사용하는 느낌

// 그룹()과 또는 ( | ) 연산
console.log(/(ab)+/.test("ab"))
console.log(/(ab)+/.test("abab"))
console.log(/(ab)+/.test("aba"))
console.log(/dog|cat/.test("dog"))
console.log(/dog|cat/.test("cat"))

// 전화번호 정규 표현식
// 000-0000-0000
const regex = /^(010|011)-?[0-9]{4}-?[0-9]{4}$/
regex.test("010-1234-5677")
regex.test("010-123-4567")
regex.test("010-1234-5678")

// match() : 매칭결과
const str = "상품코드 : A12, B34, C56"
const codes = str.match(/[A-Z][0-9]{2}/g) // g: 전체검색
console.log(codes)

// 비밀번호 형식을 잘 지켰냐
// 이메일 형식을 잘 지켰냐