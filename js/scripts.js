function menuToggle() {
var x = document.getElementById('myNavtoggle');
if (x.className === 'navtoggle') {
  x.className += ' responsive';
} else {
  x.className = 'navtoggle';
}
}

//*transition of burgr menu function menuToggle() {
//  var x = document.getElementById('myNavtoggle');
//  var z = document.getElementById('nav');
//  if (x.className === 'navtoggle') {
  //  x.className += ' responsive';
  //    z.style.transition = "all 0.5s ease";
//  } else {
  //  x.className = 'navtoggle';
  //      z.style.transition = "all 0.5s ease";
//  }
//}
