$('.accordion__btn').on('click', handleClick);

function handleClick() {
  if (window.innerWidth > 500) {
    showTab(this);
    showTabCard(this);
  } else {
    toggleTab(this)
  }
};

function showTab(ctaElement) {
  $.each($('.accordion__btn'), (i, btn) => {
    if (btn === ctaElement) {
      $(btn).addClass('active');
    } else {
      $(btn).removeClass('active');
    }
  })
};

function showTabCard(ctaElement) {
  $('.accordion__article').addClass('hidden');
  $(ctaElement).next().removeClass('hidden');
};

function toggleTab(ctaElement) {
  $(ctaElement).toggleClass('active');
  $(ctaElement).next().toggleClass('hidden');
}
