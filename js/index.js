$(function () {
  'use strict';

  // banner slider
  $('#slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    pauseOnHover: false,
    nextArrow: `<i class='fas fa-chevron-right slick__next'></i>`,
    prevArrow: `<i class='fas fa-chevron-left slick__prev'></i>`,
  });
});
