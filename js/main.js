const preloader = document.querySelector(".preloader");
const body = document.querySelector(".wrapper");
const headerList = document.querySelector(".header__list-ph");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("active");
  }, 2000);
});

window.addEventListener("load", function () {
  setTimeout(() => {
    body.classList.add("active");
  }, 2100);
});

window.addEventListener("load", function () {
  setTimeout(() => {
    headerList.classList.add("active");
  }, 3500);
});
