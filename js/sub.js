$(function(){
   $('.scroll_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    prevArrow :'<button class="btn_prev"></button>',
    nextArrow :'<button class="btn_next"></button>',
    responsive: [
      {
        breakpoint: 1200, // 너비 1024 이하 일때 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows: true,
          prevArrow :'<button class="btn_prev"></button>',
          nextArrow :'<button class="btn_next"></button>'
        }
        },
      {
        breakpoint: 768, // 너비 768 이하 일때 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows:true,
          prevArrow :'<button class="btn_prev"></button>',
          nextArrow :'<button class="btn_next"></button>'
        }
        },

                ]
  });
  
  $('.trident').click(function () {
    if ($('.gnb').css('display') == 'none') {
      $(this).addClass('on');
      $('.gnb').slideDown();
    } else {
      $(this).removeClass('on');
      $('.gnb').slideUp();
    }
  })
  
  $(window).resize(function () {
    var win_w = $(window).width()
    if (win_w >= 1024) {
      if ($('.trident').hasClass('on') == true) {
        $('.gnb').css({
          'display': 'none'
        });
        $('.trident').removeClass('on');
      }
    }
  }).resize();
})