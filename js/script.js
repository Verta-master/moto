//Mobile menu
$('.menu__btn').click(function(e) {
  e.stopPropagation();
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

if (window.innerWidth < 1170) {
  $('body').click(function(){
    $('.menu__list').slideUp();
    $('.menu').removeClass('menu--opened');
  });
};

if (window.innerWidth < 766) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
};
