// 2개의 주사위를 던졌을 때 나오는 눈을 출력
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인경우 실행 중단
let sum = 0;
while (sum != 5) {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  sum = dice1 + dice2;
  console.log(`(${dice1},${dice2})`);
}

// 로또 번호 6개를 추출하여 배열에 담은 후 출력
// 1 ~ 45

let arr = [];
// while (true) {
//   let num = Math.floor(Math.random() * 45) + 1;
//
//   if (!arr.includes(num)) {
//     arr.push(num);
//   }
//   if (arr.length > 5) break;
// }
// arr.sort((a, b) => a - b);
// console.log(arr.toString());

for (let i = 0; i < 6; i++) {
  let num = Math.floor(Math.random() * 45) + 1;
  while (arr.includes(num)) {
    num = Math.floor(Math.random() * 45) + 1;
  }
  arr.push(num);
} // 시간 복잡도가 커져서 별로
arr.sort((a, b) => a - b);
console.log(arr.toString());
