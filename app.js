function myMove() {
  var elem = document.getElementById('.navbar a:hover');
  var pos = 0;
  var id = setInterval(frame, 2);
  function frame() {
    if (pos == 20) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
