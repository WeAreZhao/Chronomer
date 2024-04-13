const observer = new IntersectionObserver(handleIntersection);
const target = document.getElementById('target');

observer.observe(target);

function handleIntersection(entries) {
  entries.forEach(entry => {
    const introSection = document.querySelector('.intro');
    const footerSection = document.querySelector('footer');
    const mainContentSection = document.querySelector('.body');

    if (entry.isIntersecting) {
      // introSection.style.backgroundColor = "#fff6f0";
      footerSection.style.backgroundColor = "#fff6f0";
      mainContentSection.style.backgroundColor = "#fff6f0";
    } else {
      // introSection.style.backgroundColor = "#3A3238";
      footerSection.style.backgroundColor = "#3A3238";
      mainContentSection.style.backgroundColor = "#3A3238";
    }
  });
}

const menuList = document.querySelector("nav");
const screen = document.querySelector(".screen");

function shift() {
  if (menuList.classList.contains("shifted")) {
    menuList.style.transform = "translateY(-175px)";
    menuList.classList.remove("shifted");
  } else {
    menuList.style.transform = "translateY(0px)";
    menuList.classList.add("shifted");
  }
}

function reveal() {
  if (screen.classList.contains("reveal")) {
    screen.classList.remove("reveal");
  } else {
    screen.classList.add("reveal");
  }
}