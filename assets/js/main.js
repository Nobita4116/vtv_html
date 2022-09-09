$('.slick-banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots:true,
});


$('.slick-feedback').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots:true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.slick-news').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots:false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    }
  ]
});


$('.slick-pn').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});



$('.slick-banner').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  var checkh = $('.site-banner .slick-current').height();
  var checkh2 = $('.site-banner .slick-current .js-content').height();
  var t = checkh - checkh2;
  var tx = t / 2 + 20;
  $('.site-banner .slick-dots').css('bottom', tx);
});


$('.js-menu').click(function(event) {
  $('.menu-mobile').fadeIn();
});
$('.js-close').click(function(event) {
  $('.menu-mobile').fadeOut();
});

$('.js-dropdown').click(function(){
  $(this).parent('ul li').find('>.sub-menu').toggle();
});

$(".backtotop").click(function () {
   $("html, body").animate({
      scrollTop: 0
   }, "slow");
   return !1
});