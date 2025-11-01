window.addEventListener("load", function() {
  const loader = document.getElementById("preloader");
  
  // Keep preloader visible for 3 seconds, then hide
  this.setTimeout(() => {
    loader.classList.add("hide");
  }, 3000);
});
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".scroll-section");

  sections.forEach(sec => {
    const sectionTop = sec.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8; // when to show

    if (sectionTop < triggerPoint) {
      sec.classList.add("show");
    }
  });
});