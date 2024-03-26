const modal = document.querySelector(".modal");
const btnOpen = document.querySelectorAll(".sign-in");
const btnClose = document.querySelector(".close-modal");
const btnEntry = document.querySelector(".entry");
const image = document.querySelector("#spiderman");
const banner = document.querySelector(".banner-box");
const image2 = document.querySelector(".you");
const banner2 = document.querySelector(".banner-box-2");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
};
const openBanner = function () {
  banner.classList.remove("hidden");
  image.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const bannerBox2 = function () {
  banner2.classList.remove("hidden");
  image2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
};
const closeBanner = function () {
  banner.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeBanner2 = function () {
  banner2.classList.add("hidden");
  overlay.classList.add("hidden");
};

const entryBtn = function () {
  let message = alert("Try again, put your email and password");
};

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
btnEntry.addEventListener("click", entryBtn);
image.addEventListener("click", openBanner);
banner.addEventListener("click", closeBanner);
image2.addEventListener("click", bannerBox2);
banner2.addEventListener("click", closeBanner2);
