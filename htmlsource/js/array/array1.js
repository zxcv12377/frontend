const fruit = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const other = ["과일", 1, 3.14, new Date(), true, {}];

const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 조회
// 전체

console.log("\n--- for i 사용");
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

console.log("\n--- for i 사용");
for (const element of other) {
  console.log(element);
}

console.log("\n--- foreach 사용");
array1.forEach((item) => {
  console.log(item);
});

console.log("\n--- 확인용");
console.log(planet);
console.log(planet.toString);
