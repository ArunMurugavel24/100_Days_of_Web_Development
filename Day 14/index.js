function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  trailer.classList.toggle('active');
  video.currentTime = 0;
  video.pause();
}

var cursor = document.getElementById('cursor');
document.onmousemove = function (e) {
  cursor.style.left = e.pageX - 25 + 'px';
  cursor.style.top = e.pageY - 25 + 'px';
  cursor.style.display = 'block';
};
