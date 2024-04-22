const observer = new IntersectionObserver(handleIntersection);
const target = document.getElementById('target');

observer.observe(target);

function handleIntersection(entries) {
  entries.forEach(entry => {
    const introSection = document.querySelector('.intro');
    const footerSection = document.querySelector('footer');
    // const mainContentSection = document.querySelector('main');

    if (entry.isIntersecting) {
      // introSection.style.backgroundColor = "#ffffff";
      footerSection.style.backgroundColor = "#ffffff";
      mainContentSection.style.backgroundColor = "#ffffff";
    } else {
      // introSection.style.backgroundColor = "#3A3238";
      footerSection.style.backgroundColor = "#3A3238";
      mainContentSection.style.backgroundColor = "#3A3238";
    }
  });
}

function handleIntersection(entries) {
  entries.forEach(entry => {
    const screen = document.querySelector(".image-shadow");

    if (entry.isIntersecting) {
      screen.style.backgroundColor = "#00000090";
    } else {
      screen.style.backgroundColor = "#00000000";
    }
  });
}