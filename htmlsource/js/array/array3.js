const fruit = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const other = ["과일", 1, 3.14, new Date(), true, {}];

const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 메소드
// join("원하는 문자") : string 반환 원하는 문자로 연결
console.log("배열 요소 연결 " + fruit.join("^"));
console.log("배열 연결 " + fruit.concat(array1));
console.log("배열 분할 " + fruit.slice(1, 3));
console.log("배열 정렬 " + fruit.sort());
// 숫자 정렬 안해줌 싸가지 없네;;
const array2 = [22, 43, 1, 4, 7, 88, 92];
console.log("배열 정렬 " + array2.sort());
console.log("배열 오름차순 정렬 " + array2.sort((a, b) => a - b));
console.log("배열 내림차순 정렬 " + array2.sort((a, b) => b - a));
console.log("배열 거꾸로 정렬 " + fruit.reverse());
console.log("망고의 index 찾기 " + fruit.indexOf("망고")); // 없으면 -1 출력
console.log("망고의 포함여부 " + fruit.includes("망고")); // 없으면 false

console.log("30보다 큰 배열 요소 " + array2.find((item) => item > 30));
console.log("30보다 큰 배열 요소의 인덱스 " + array2.findIndex((item) => item > 30));

// map() : 새 배열로 리턴
const result = array2.map((item) => item * 2);
console.log("map : " + result);

console.log("filter : " + array2.filter((item) => item > 10));

// 얕은 복사 / 깊은 복사
let fruit2 = fruit;
// ... : spread 연산자
let shallowCopy = [...fruit];
// 5 0101
// 3 0011
// &1
// |11 1011
// 12 1100
// 0011 3
fruit.push("딸기");
console.log("추가 후 ", fruit.toString());
console.log("추가 후 ", fruit2.toString());
console.log("추가 후 ", shallowCopy.toString());

// 동일한 값으로 배열 생성
const array3 = [1, 1, 1, 1, 1];
const array4 = new Array(5).fill(1);
console.log("동일한 값으로 배열 생성" + array4);

const array5 = [];
fruit.forEach((item) => array5.push(item));
console.log("fruit 값 복사 " + array5);

let array6 = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(array6.flat()); // 이차원 배열을 일차원으로 만들어줌

array6 = [
  [1, 2, 3],
  [4, 5, 6, [9, [10, 11]]],
];

console.log(array6.flat());
console.log(array6.flat(2)); // n+1차원을 1차원으로 바꿔줌
console.log(array6.flat(3));

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];
let newArr = varArr1.concat(varArr2);
console.log("합친 후 ", newArr);
let toArr = [varArr1, varArr2];
let toArr2 = [...varArr1, ...varArr2];

console.log(toArr);
varArr1[0] = "num5";
console.log("varArr[0] 변경 후 ", varArr1);
console.log("varArr[0] 변경 후 ", toArr);
console.log("varArr[0] 변경 후 ", toArr2);
