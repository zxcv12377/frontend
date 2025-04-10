const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("orange");
      contents[i].classList.remove("show");
    }
    btn.classList.add("orange");
    contents[idx].classList.add("show");
  });
});
