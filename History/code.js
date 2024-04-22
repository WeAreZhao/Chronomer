const stickySections = [...document.querySelectorAll('.sticky')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section')
  let percentage = ((window.scrollY - offsetTop)/ window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var div = document.getElementById('top');
  var maxWidthVw = 100;
  var windowHeight = window.innerHeight;
  var offset = 200 * windowHeight / 100;
  var newWidthVw = maxWidthVw - ((scrollPosition - offset) * 0.1);

  if (newWidthVw < 70) {
    newWidthVw = 70;
  }

  div.style.width = maxWidthVw + 'vw';
  div.style.width = newWidthVw + 'vw';
});
