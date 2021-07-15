function toggle() {
  var trailer = document.querySelector('.trailer');
  var video = document.querySelector('video');
  trailer.classList.toggle('active');
  video.currentTime = 0;
  video.pause();
}
