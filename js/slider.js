$(".header > .slider__header:gt(0)").hide();

setInterval(function() {
  $('.header > .slider__header:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.header');
}, 5000);