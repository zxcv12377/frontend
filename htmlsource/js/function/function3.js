// 화살표 함수
const myFunc1 = () => {};

const showMessage = () => console.log("Hello, JS");

const multiply = (x, y) => console.log(`${x}, ${y}`);

const myFunc2 = (x, y) => x * y;

const myFunc3 = (x) => {
  if (x % 3 == 0) {
    if (x % 9 == 0) {
      console.log("박수 x2");
    } else {
      console.log("박수");
    }
  } else {
    console.log("통과");
  }
};

const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];

fruits.forEach(function (element) {});
fruits.forEach((element) => console.log(element));
