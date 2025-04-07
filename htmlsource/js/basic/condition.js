// 조건문
// true : true 자료들, 0 제외숫자, '문자', [], {}
// false : false 자료들 , 0, '', null, undefined, NaN

const date = new Date();
console.log(date);
const hour = date.getHours();

if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

// NaN(not a number)
console.log("\n=== isNaN()");
console.log(isNaN("12"));
console.log(isNaN("abc"));

// String ==> number
// Number(), parseInt()
console.log("\n=== Number()");
const num1 = Number("85.3");
console.log(typeof num1);
console.log(Number("abc"));
console.log(Number("78 45 55"));
console.log(num1);

console.log("\n=== parseInt()");
const num2 = parseInt("85.3");
console.log(typeof num2);
console.log(parseInt("abc"));
console.log(parseInt("78 45 55"));
console.log(num2);

if (!isNaN(Number("123"))) {
  console.log("숫자");
} else {
  console.log("숫자No");
}

console.log("\n=== parseInt()");
let day = "";
switch (date.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    break;
}
console.log("오늘은 " + day);

let num3 = 93.2;
console.log(num3 % 10);
