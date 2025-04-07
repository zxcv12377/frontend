let numArr = [57, 273, 586, 32, 57, 103, 312, 2];

// 최소값, 최대값 출력

let max = numArr[0];
let min = numArr[0];

// for (let i = 1; i < numArr.length; i++) {
//   if (max < numArr[i]) max = numArr[i];
//   if (min > numArr[i]) min = numArr[i];
// }

for (const num of numArr) {
  if (max < num) max = num;
  if (min > num) min = num;
}

console.log(`최대값 : ${max}, 최소값 : ${min}`);

// numArr = numArr.sort((a, b) => a - b);

// console.log("최소값 : " + numArr[0]);
// console.log("최대값 : " + numArr[numArr.length - 1]);

// 5    0101
// 3    0011
// 12   1100
// 1    0001    5 && 3

// 7    0111    5 || 3

// 3    0011    !12
