function menuShow() {
  let menuMobile = document.querySelector('.menu-responsivo');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');

  } else {
    menuMobile.classList.add('open')
  };
};
$(document).ready(function() {
  $('#gradedefotos').slick();
});