// "use strict"

// alert("test")

// 줄바꿈이 있다면 세미콜론(;)은 생략 가능

// 자바스크립트 변수
// 타입이 없음
// let, const, var(예전 방식)
// let : 변수 선언, var : 유연한 변수선언 방식
let a = 3;
console.log(typeof a); // number
console.log(a);
a="test";// '', "" 둘다 문자열
console.log(typeof a); // string
console.log(a);

// const : 상수(절대불변) 선언
const b = 15;
console.log(b);
// b=20;
// console.log(b);

{
    let a = 333;
    console.log("blacok-scope", a);

}

// 변수 범위
// var : function scope
// let, const : block scope
function foobar(){
    var foo = 5;
    console.log(foo);
}
// console.log(foo);

if(true){
    var aa =5;
    console.log(aa);
}
console.log(aa);

if(true){
    let bb =5;
    console.log("let ",bb);
}
// console.log("let ",bb);