const fruit = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const other = ["과일", 1, 3.14, new Date(), true, {}];

const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 메소드
console.log("배열 길이", fruit.length);
console.log("배열 => 문자열", fruit.toString());
console.log("배열 요소 조회", fruit[2]);
console.log("배열 요소 조회", fruit.at(2));
fruit.console.log("\n--- 배열 요소 추가");
//push, unshift, 인덱스
fruit.push("멜롱");
console.log("배열 => 문자열", fruit.toString());
fruit.unshift("키위");
console.log("배열 => 문자열", fruit.toString());
fruit[3] = "딸기"; // 수정
console.log("배열 => 문자열", fruit.toString());

// splice(위치, 삭제할 갯수, item)
array1.splice(2, 0, "킥보드");
console.log("배열 => 문자열", array1.toString());
planet.splice(6, 1, "명왕성");
console.log("배열 => 문자열", planet.toString());

// 삭제
// pop(뒤에 삭제), shift(앞에 삭제), splice(위치, 삭제할 갯수)
console.log("\n --- 배열 요소 삭제");
console.log("배열 => 문자열", fruit.toString());
fruit.pop();
console.log("배열 => 문자열", fruit.toString());
fruit.shift();
console.log("배열 => 문자열", fruit.toString());
console.log("배열 => 문자열", other.toString());
other.splice(2, 2);
console.log("배열 => 문자열", other.toString());
