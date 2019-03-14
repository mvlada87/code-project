var scrollVertical = 0;
var distance = 50;
var scrollSpeed = 6;

var maxTopScroll;

function calcWinHeight() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];
  maxTopScroll = Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight,
    document.documentElement.offsetHeight) - window.innerHeight;
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