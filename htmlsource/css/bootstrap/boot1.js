// 요소 찾기
// querySelector() : 조건에 맞는 첫번째 요소
let div = document.querySelector("div");
console.log(div);

div = document.querySelector(".container-fluid");
console.log(div);

// querySelectorAll() => NodeList : div 태그 모두 찾기
divs = document.querySelectorAll("div");
console.log(divs);

divs.forEach((e) => {
  console.log(e);
});

let btn = document.querySelector(".navbar-toggler");
console.log(btn);

// 메뉴 찾기
const lis = document.querySelectorAll(".navbar-nav > .nav-item");

lis.forEach((li) => {
  console.log(li);
});

let form = document.querySelector(".d-flex");
console.log(form);

form = document.querySelector("[role= 'search']");
console.log(form);

// form 안 input 요소 찾기
let input = document.querySelector(".d-flex input");
console.log(input);

// table 찾기
let table = document.querySelector(".table");
console.log(table);
// table 안 thead 찾기
let thead = document.querySelector(".table > thead");
console.log(thead);

// table 안 tbody 두번째 tr 찾기
let tr = document.querySelector(".table tbody > tr:nth-child(2)");
console.log(tr);
