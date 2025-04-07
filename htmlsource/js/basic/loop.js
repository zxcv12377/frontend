// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// array.forEach(element => {

// });

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// for (const element of object) {

// }

// for (let index = 1; index < 11; index++) {
//   console.log(index);
// }

// let sum = 0;
// for (let index = 1; index < 101; index++) {
//   sum += index;
// }
// console.log(sum);

let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }
let sum = 0;
// while (i < 101) {
//   sum += i;
//   i++;
// }
// console.log(sum);

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

console.log("\n----- for in : 객체 출력");
const myCar = { make: "BMW", model: "X5", year: 2013 };
let txt = "";
for (const key in myCar) {
  txt += myCar[key] + " ";
}
console.log(txt);

// `${변수명}` : 템플릿 문자열 / 변수 + 문자열 출력시
const music = { siger: "아델", time: 15, title: "hello" };
for (const key in music) {
  console.log(`${key} : ${music[key]}`);
}

console.log("\n----- break");
for (let index = 0; index < 101; index++) {
  if (index == 50) break;
  console.log(index);
}

console.log("\n----- continue");
for (let index = 0; index < 40; index += 2) {
  if (index == 0) continue;
  console.log(index);
}
