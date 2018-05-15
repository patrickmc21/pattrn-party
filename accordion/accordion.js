$('.accordion__btn').on('click', handleClick);

function handleClick() {
  showTab(this);
  showTabCard(this);
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

