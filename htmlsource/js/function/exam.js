// 1. 함수 선언방식으로 두개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성
function plus1(x, y) {
  return x + y;
}
console.log(plus1(3, 5));
// 2. 함수표현식으로 두개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성
const plus2 = function (x, y) {
  return x + y;
};
console.log(plus2(5, 5));

// 3. 1~10 까지 더하는 작업을 함수로 작성 함수 표현식
let sum = 0;
const plusloop = function (x) {
  if (x == 11) {
    console.log(sum);
  } else {
    sum += x;
    plusloop(x + 1);
  }
};

plusloop(1);
// 4. 숫자를 받아서 3의 배수인지 확인
//  3의 배수라면 박수 출력 아니라면 통과 출력
const fuc1 = function (x) {
  if (x % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};

fuc1(7);
// 5. 4번 개선
//      9의 배수인 경우 박수 x2 출력
const fuc2 = function (x) {
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
fuc2(9);
// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
// 과목은 2과목이라고 하고, 두 과목 합해서 120점 이상이면 합격
// 한과목이 40점 미만이면 과락으로 불합격

const fuc3 = function (x, y) {
  let sum = x + y;
  if (x < 40 || y < 40) {
    console.log("불합격");
  } else {
    if (sum >= 120) {
      console.log("합격");
    } else {
      console.log("불합격");
    }
  }
};
fuc3(40, 60);
