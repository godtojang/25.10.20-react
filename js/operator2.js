// 대입 연산자
// =
// 우변의 값을 좌변에 대입

let x = 10;
// 복합 대입 연산자
// 산술연산자에 대입연산자가 합쳐진 형태
// +=, -=, *=, /=, %=, **=
let a = 5;
a += 5; // a = a + 5;
console.log(a)
// 자기 자신의 값에 특정 값을 연산하여
// 자신의 변수에 다시 대입하는 성격을 띔
a -= 3;
console.log(a)

let str = "Hello"
str += "JavaScript" // str = str + "JavaScript"
console.log(str)

str = "<table border = '1'>"
str += "<tr>"
str += "<td>1</td><td>2</td><td>3</td>"
str += "</tr>"
str += "</table>"
document.write(str)