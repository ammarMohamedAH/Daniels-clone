var typed = new Typed("#element", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

var sec = document.querySelector(".prog-bar");
var progBar = document.querySelectorAll(".about .prog-bar h6");

var section = document.querySelector(".numbers-section");
var nums = document.querySelectorAll(".numbers-section h2");
var starte = false;

function count(ele) {
  var goal = ele.dataset.global;
  var count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

window.onscroll = function () {
  const navbar = document.getElementById("navbar-example");
  if (window.scrollY > 500) {
    // Adjust this value based on when you want the change to occur
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY >= section.offsetTop - 450) {
    if (!starte) {
      nums.forEach((num) => count(num));
      starte = true;
    }
  }

  if (window.scrollY >= sec.offsetTop - 250) {
    progBar.forEach((progBar) => {
      progBar.style.width = progBar.dataset.width;
    });
  }
};

var load = document.querySelector(".load");
var loadSpiner = document.querySelector(".spinner-border");

var clear = setInterval(() => {
  load.classList.add("display-no");
  clearInterval;
}, 2000);

var loa = setInterval(() => {
  loadSpiner.classList.add("display-no");
  clearInterval;
}, 2000);
