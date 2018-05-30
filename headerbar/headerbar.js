$('.header__nav--open-btn').on('click', toggleMenu);
$('.header__nav--close-btn').on('click', closeMenu);

function toggleMenu() {
  if (window.innerWidth <= 600) {
    $('.header__nav--link-wrapper').toggleClass('hidden');
    $('.header').toggleClass('grow');
  }
}; 

function closeMenu() {
  if (window.innerWidth <= 600) {
    $('.header__nav--link-wrapper').addClass('hidden');
    $('.header').removeClass('grow');
  }
};


