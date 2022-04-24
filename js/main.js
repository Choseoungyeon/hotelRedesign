$(function () {
  /*slick*/
  $('.scroll_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // 너비 1024 이하 일때 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          arrows: false,
        }
        },
      {
        breakpoint: 768, // 너비 768 이하 일때 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          arrows: false,
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

  /*load후에 시행되는 함수*/
  $(window).on('load', function () {

    /*vivus*/
    $('.cls-1').fadeIn(100);

    new Vivus('mySvg', {
      type: 'sync',
      duration: 70,
    }, function () {
      $('.cls-1').addClass('fill')
      $('.line').addClass('suite', 1000)
    });

  });

  /*main_fadein out(임시)*/

  function active(sec, act, del) {
    if ($(this).scrollTop() > $(sec).offset().top - ($(this).height() / del)) {
      $(sec).find(act).addClass('show');
    } else {
      $(sec).find(act).removeClass('show');
    }

  };

  $('.about_us_left').addClass('show');
  
  $(window).scroll(function () {
    var win_w = $(window).width()
    if(win_w<768){
    }else{
      active('.about_us', '.about_us_left', '1.3');
    }
    active('.about_us', 'h2', '3.0');
    active('.about_us', 'p', '3.0');
    active('.about_us', '.see_more', '3.0');
    active('.promotion', 'h2', '1.5');
    active('.promotion', '.reservation', '1.5');
    active('.promotion', '.scroll_wrap', '2.2');
    active('.rooms', '.rooms_right', '1.5');
    active('.rooms', 'p', '2.8');
    active('.rooms', 'h2', '2.8');
    active('.rooms', '.see_more', '2.8');
    active('.facilites', '.facilites_left', '1.3');
    active('.facilites', 'h2', '2.2');
    active('.facilites', 'p', '2.2');
    active('.facilites', '.see_more', '2.2');
    active('.facilities_sub', 'h2', '1.5');
    active('.facilities_sub', '.reservation', '1.5');
    active('.facilities_sub', '.dining', '2.0');
    active('.facilities_sub', '.spa', '2.3');
    active('.facilities_sub', '.wedding', '2.6');
    active('.video', '.video_right', '1.5');
    active('.video', 'h2', '2.2');
    active('.video', 'p', '2.2');
    active('.video', '.see_more', '2.2');
    active('.contact_us', 'h3', '1.5');
    active('.contact_us', 'p', '1.5');
    active('.contact_us', '.get_in_touch', '1.5');
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
    }else if(win_w<768){
        $('.about_us_left').addClass('show');
      }
  }).resize();

  /*main_fadein out(임시)*/
  var rolling = setInterval(function () {
    $('.next_button').click()
  }, 5000)
  //fade in/out

  $('.main_bar span').click(function () {
    $('.main_bar span').removeClass('on_bar');
    $(this).addClass('on_bar');

    n = $(this).index() + 2
    $('.main_background li').fadeOut(1000);
    $('.main_' + (n - 1)).fadeIn(1000);
  })

  $('.main_bar span').mouseover(function () {
    clearInterval(rolling)
  })

  $('.main_bar span').mouseout(function () {
    rolling = setInterval(function () {
      $('.next_button').click()
    }, 5000)
  })

  var n = 4
  $('.next_button').click(function () {
    n--
    $('.main_' + n).fadeOut(1000);
    $('.main_bar span').removeClass('on_bar')
    $('.main_' + (n - 1)).fadeIn();
    $('.bar_' + (n - 1)).addClass('on_bar')
    if (n == 1) {
      n = 4
      $('.main_' + (n - 1)).fadeIn(1000);
      $('.bar_' + (n - 1)).addClass('on_bar');
    }
  });

  $(window).blur(function () {
    clearInterval(rolling);
  });
  $(window).focus(function () {
    rolling = setInterval(function () {
      $('.next_button').click()
    }, 5000);
  })

});
/*main화면*/
