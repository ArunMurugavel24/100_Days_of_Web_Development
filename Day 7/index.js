function toggleMenu() {
  var menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
