var links = document.querySelectorAll("[data-behavior=smooth-scroll]");
links.forEach(function(link, index) {
  link.onclick = function() {
    var href = link.getAttribute("href");
    var section = document.querySelector(href);
    var header = document.querySelector(".header");
    var scrollHeight = section.offsetTop - header.offsetHeight;

    window.scroll({
      top: scrollHeight,
      behavior: 'smooth'
    })
  }
})
