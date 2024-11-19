AOS.init();

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior : 'smooth'
  });
}


var readmore = document.querySelector(".next-read").addEventListener("click", () => {
    const open = document.getElementById("open-text");
          if(open.style.display === "block") {
             open.style.display = "none"
          } else {
            open.style.display = "block"
          }
})
