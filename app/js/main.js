$(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
  }),
    $('.specialists__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 861,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 701,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    $('.header__menu-btn').on('click', function () {
      $('.header__menu').slideToggle()
    }),
    $('.header__menu-link.drop-down').on('click', function () {
      $(this).children('.header__menu-link > ul').toggleClass('active')
    })
})
