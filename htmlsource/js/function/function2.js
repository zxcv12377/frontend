// 함수 표현식
const myFunc1 = function () {};
const myFunc2 = function name() {};

const showMessage = function () {
  console.log("Hello, JS");
};

showMessage();

const multiply = function (x, y) {
  console.log(`${x}, ${y}`);
};

multiply(2, 3);

// multiply2 이름은 내부용(외부에서 호출불가)
const myFunc3 = function multiply2(x, y) {
  return x * y;
};

console.log(myFunc3(2, 30));

const rec = function f(x) {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    f(x - 1);
  }
};

rec(5);

// 함수 정의방식 비교
// multiply4 vs myFunc4
// 호이스팅(hoisting) : 선언하기 전에 사용
// function name(){} / var 변수는 허용
// 호이스팅 불가
// 함수 표현식 / let, const
console.log(multiply4(5, 6)); // 호이스팅 허용
y = 5;
console.log(`y = ${y}`); // 호이스팅 허용
var y;

console.log(myFunc4(3, 9));

function multiply4(x, y) {
  return x * y;
}

// multiply2 이름은 내부용(외부에서 호출불가)
const myFunc4 = function multiply2(x, y) {
  return x * y;
};
