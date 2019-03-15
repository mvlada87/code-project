var scrollVertical = 0;
var distance = 80;
var scrollSpeed = 14;

var maxTopScroll;

function calcWinHeight() {
  var w = window,
    d = document,
    e = d.documentElement;
  maxTopScroll = Math.max(d.body.scrollHeight, d.body.offsetHeight,
    e.clientHeight, d.documentElement.scrollHeight,
    e.offsetHeight) - w.innerHeight;
}

function autoScrollTo(el) {
  calcWinHeight();
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var animate = setTimeout(function () { autoScrollTo(el); }, scrollSpeed);

  if (document.documentElement.scrollTop >= maxTopScroll) {
    document.documentElement.scrollTop = maxTopScroll;
    clearTimeout(animate);
    document.getElementById('navToggle').checked = false;
  }

  if (currentY < targetY - distance) {
    scrollVertical = currentY + distance;
    window.scroll(0, scrollVertical);
  } else if (currentY > targetY + distance) {
    scrollVertical = currentY - distance;
    window.scroll(0, scrollVertical);
  } else {
    clearTimeout(animate);
    document.getElementById('navToggle').checked = false;
  }

}