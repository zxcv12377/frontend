// 함수 == 자바의 메소드
// 함수 생성
// function name(params) {

// }
showMessage();

// 1. 노매개변수
function showMessage() {
  console.log("Hello, JS");
}

// 2. 매개변수
function multiply(x, y) {
  console.log(`${x}, ${y}`);
}

multiply();
multiply(5);
multiply(4, 5);

function multiply2(x, y) {
  return x * y;
}

console.log(multiply2()); // NaN
console.log(multiply2(5, 3));
console.log(multiply2);

// 매개변수 기본값
function multiply2(x, y = 3) {
  return x * y;
}
console.log(multiply2(5, 4));
console.log(multiply2(8));

function test(a, b, c, d) {
  b = b || 52;
  c = c || 273;
  console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}
test(1, 2, 5, 6);
test(3);

function a() {
  function b() {
    console.log("B");
  }
  if (true) {
    function c() {
      console.log("c");
    }
  }
  b();
  c();
}

a();
