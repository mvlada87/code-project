var scrollVertical = 0;
var distance = 30;
var scrollSpeed = 15;

var checkbox = document.getElementById('navToggle').checked;

function autoScrollTo(el) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;
  var animate = setTimeout('autoScrollTo(\'' + el + '\')', scrollSpeed);

  if (yPos > bodyHeight) {
    clearTimeout(animate);
  } else {
    if (currentY < targetY - distance) {
      scrollVertical = currentY + distance;
      window.scroll(0, scrollVertical);
    } else if (currentY > targetY + distance) {
      scrollVertical = currentY - distance;
      window.scroll(0, scrollVertical);
    } else {
      clearTimeout(animate);
    }
  }

  console.log();
}