const user = {
  name: "홍길동",
  age: 25,
};

// name, age, country를 분해할당으로 꺼냄
// country값이 없으면 기본값 "korea"가 출력되도록 함

const { name, age, country = "korea" } = user;

const fruits = ["사과", "바나나"];
const fruits2 = ["포도", "키위"];

// 스프레드 연산자를 이용해서 하나의 배열 allFruits에
// ["사과", "바나나", "포도", "키위"] 형태가 나오도록 작성

const allFruits = [...fruits1, ...fruits2];
