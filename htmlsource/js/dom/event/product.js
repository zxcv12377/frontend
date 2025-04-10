const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 80000, title: "Black Monastery" },
];

// const names = document.querySelectorAll(".col-sm-4 h5");
// const prices = document.querySelectorAll(".col-sm-4 p");
// products.forEach((item, idx) => {
//   names[idx].textContent = item.title;
//   prices[idx].textContent = "가격 : " + item.price;
// });

// const cols = document.querySelectorAll(".col-sm-4");
// cols.forEach((col, idx) => {
//   col.querySelector("h5").textContent = products[idx].title;
//   col.querySelector("p").textContent = products[idx].price;
// });

const row = document.querySelector(".row");
let tags = "";
products.forEach((item, idx) => {
  tags += `<div class="col-sm-4">`;
  tags += `<img src="https://placehold.co/600" alt="" class="w-100" />`;
  tags += `<h5>${item.title}</h5>`;
  tags += `<p>가격 : ${item.price}</p>`;
  tags += `</div>`;
});
row.insertAdjacentHTML("afterbegin", tags);
