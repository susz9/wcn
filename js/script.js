window.onload = function () {
  copyDate();
};
window.onscroll = function () {
  stickyNav();
};
// window.onscroll = (function(){stickyCarousel()});

function stickyNav() {
  let navbar = document.querySelector(".navbar");
  let x = navbar.offsetTop;
  if (window.pageYOffset >= x) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function getYear() {
  let date = new Date();
  let year = date.getFullYear();
  return year;
}

function copyDate() {
  const noticeX = document.querySelector(".notice");
  const content = `
    Copyright &copy ${getYear()}
    <a target="_blank" href="https://www.facebook.com/anonminati69">ANONMINATI</a>
    `;
  noticeX.innerHTML = content;
}
