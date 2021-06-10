window.onload = function size () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  console.log(userAgent)
  if (/android/i.test(userAgent) || /iPad|iPhone|iPod/i.test(userAgent)) {
    let rects = document.getElementsByTagName("rect");
    for (let i = 0; i < rects.length; i++) {
      if (rects[i].id === "printButton" || rects[i].id === "exportButton") {
        rects[i].style.display = "none";
      }
    }
  }
}