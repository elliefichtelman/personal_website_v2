// VERSION 4
var navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function(navLink, index) {
  navLink.onclick = function() {
    var href = navLink.getAttribute("href");
    var section = document.querySelector(href);
    var header = document.querySelector(".header");
    var scrollHeight = section.offsetTop - header.offsetHeight;

    window.scroll({
      top: scrollHeight,
      behavior: 'smooth'
    })
  }
})
