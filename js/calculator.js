function cal(n) {
  var num1 = Number(document.getElementById("su1").value)
  var num2 = Number(document.getElementById("su2").value)
  var num3 = document.getElementById("result")
  if (n == '+') {
    num3.value = num1 + num2
  } else if (n == '-') {
    num3.value = num1 - num2
  } else if (n == '*') {
    num3.value = num1 * num2
  } else if (n == '/') {
    num3.value = num1 / num2
  }
}