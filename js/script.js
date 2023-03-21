$(document).ready(function () {
  //  리사이징 할때마다 새로고침
  //   var lastWidth = $(window).width();
  //   $(window).resize(function () {
  //     if ($(window).width() != lastWidth) {
  //         location.reload();
  //         lastWidth = $(window).width();
  //         return false;
  //     }
  // });

  // 리사이즈 끝나고 0.3초마다 리셋
  // var delay = 300;
  // var timer = null;
  // $(window).on("resize", function () {
  //   clearTimeout(timer);
  //   timer = setTimeout(function () {
  //     document.location.reload();
  //   }, delay);
  // });

  // nav
  // =========================== //

  if ($(window).width() > 767) {
    $("header nav ul.gnb>li").hover(
      function () {
        $("ul.sub, .nav-bg").stop().slideDown();
      },
      function () {
        $("ul.sub, .nav-bg").stop().slideUp();
      }
    );

    $(".nav-bg").hover(
      function () {
        // $(".hover-bg").stop().show();

        $(".nav-bg").stop().slideDown();
        $("ul.sub").stop().slideDown();
      },
      function () {
        // $(".nav-bg").stop().hide();
        // $(".hover-bg").stop().hide();

        $(".nav-bg").stop().slideUp();
        $("ul.sub").stop().slideUp();

        // $(".nav-bg").stop().slideUp();
      }
    );
  }

  // mobile
  // =========================== //

  if ($(window).width() < 768) {
    $("ul.gnb>li").click(function () {
      $(this).find("ul.sub").stop().slideToggle();
      $(this).toggleClass("on");
      $(this).siblings().removeClass("on").find("ul.sub").stop().slideUp();
    });

    // 모바일메뉴 open/close
    $(".m-menu-btn").click(function () {
      // $("nav").stop().slideDown();
      $("nav").stop().fadeIn();

      $(".m-menu-btn").hide();
      $(".m-x-btn").stop().show();
    });
    $(".m-x-btn").click(function () {
      // $("nav").stop().slideUp();
      $("nav").stop().fadeOut();

      $(".m-menu-btn").show();
      $(".m-x-btn").hide();
    });
  }

  // swiper - main-visual
  // =========================== //
  var swiper = new Swiper(".mySwiper.main-visual-box", {
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    loop: true,
  });

  var swiper = new Swiper(".mySwiper.sec2-sld", {
    slidesPerView: 3,
    spaceBetween: 20,

    // loop: true,

    navigation: {
      prevEl: ".swiper-button-prev.sec2-sld-p",
      nextEl: ".swiper-button-next.sec2-sld-n",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // section 1 - login float btn
  // =========================== //

  // if ($(window).width() > 767) {
    $(".login-float-btn").click(function () {
      // $(".login-box").stop().fadeIn().toggleClass("active");
      $(".login-box").stop().toggleClass("active");

      $(".login-float-btn-box").stop().toggleClass("active");
      // $(".login-float-btn-box").stop().fadeOut(100).removeClass("active");


    });

    $(".login-x-btn").click(function () {
      // $(".login-box").stop().fadeOut().removeClass("active");
      $(".login-box").stop().toggleClass("active");

      $(".login-float-btn-box").stop().toggleClass("active");
      // $(".login-float-btn-box").stop().fadeIn().toggleClass("active");


    });
  // }

  // [2.0.0] vetical tab
  // =========================== //

  (function (global, $) {
    var $menu = $(".floating-menu li.m"),
      $contents = $(".scroll"),
      $doc = $("html, body");
    $(function () {
      // 해당 섹션으로 스크롤 이동
      $menu.on("click", "a", function (e) {
        var $target = $(this).parent(),
          idx = $target.index(),
          section = $contents.eq(idx),
          offsetTop = section.offset().top;
        $doc.stop().animate(
          {
            scrollTop: offsetTop,
          },
          800
        );
        return false;
      });
    });

    // menu class 추가
    $(window).scroll(function () {
      var scltop = $(window).scrollTop();
      $.each($contents, function (idx, item) {
        var $target = $contents.eq(idx),
          i = $target.index(),
          targetTop = $target.offset().top;

        if (targetTop <= scltop) {
          $menu.removeClass("on");
          $menu.eq(idx).addClass("on");
        }
        if (!(200 <= scltop)) {
          $menu.removeClass("on");
        }
      });
    });

    //   // // Go to the TOP
    //   // var btnTop = $(".btn-top");
    //   // btnTop.on("click", "a", function (e) {
    //   //   e.preventDefault();
    //   //   $doc.stop().animate(
    //   //     {
    //   //       scrollTop: 0,
    //   //     },
    //   //     800
    //   //   );
    //   // });
  })(window, window.jQuery);

  // Select library - nice select
  // =========================== //

  $("select").niceSelect();

  // credit-tab-box
  // =========================== //

  $(".guide-v-tab > button").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $("#" + $(this).data("id"))
      .addClass("on")
      .siblings()
      .removeClass("on");
  });
}); //ready end
