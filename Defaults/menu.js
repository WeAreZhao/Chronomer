function shift() {
  const menuList = document.querySelector("nav");

  if (menuList.classList.contains("shifted")) {
    menuList.style.transform = "translateY(-175px)";
    menuList.classList.remove("shifted");
  } else {
    menuList.style.transform = "translateY(0px)";
    menuList.classList.add("shifted");
  }
}

function reveal() {
  const shadow = document.querySelector(".screen");

  if (shadow.classList.contains("reveal")) {
    shadow.classList.remove("reveal");
  } else {
    shadow.classList.add("reveal");
  }
}

function buttonAnimation() {
  const button = document.querySelector("button")
  const currentState = button.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
  } else {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
  }
}

function buttonClick() {
  shift();
  reveal();
  buttonAnimation();
}