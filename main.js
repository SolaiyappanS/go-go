function toggleFullScreen() {
  const iframe = document.getElementById("myIFrame");
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullscreen) {
    iframe.mozRequestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  }
}
