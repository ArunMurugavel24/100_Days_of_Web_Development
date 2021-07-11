var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});

function toggleMenu() {
  const toggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
