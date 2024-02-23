var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.getElementById("header");
  var section1 = document.getElementById("section1");
  var section1Top = section1.getBoundingClientRect().top;
  console.log(currentScrollPos);
  
  // Scroll only when near the header section
//   if (section1Top <= header.offsetHeight  ) {
    if (prevScrollpos > currentScrollPos && currentScrollPos <= 1) {
      section1.style.top = "100vh";
      console.log(true);
    } else {
      section1.style.top = "10vh";
    }
    prevScrollpos = currentScrollPos;
//   }
}