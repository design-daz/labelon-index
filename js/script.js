$(document).ready(function () {
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

    // $(".nav-bg").hover(
    //   function () {

    //     $(".nav-bg").stop().show();
    //     $("ul.sub").stop().show();

    //   },
    //   function () {

    //     $(".nav-bg").stop().hide();
    //     $("ul.sub").stop().hide();

    //   }
    // );
  }

  // mobile
  // =========================== //

  // if ($(window).width() < 768) {

  //   $("ul.gnb>li").click(function(){
  //       $(this).find("ul.sub").stop().slideToggle();

  //   });
  // }

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
  });

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

  // [3.3.0] credit-tab-box
  // =========================== //

  // $(".v-tab-btn-box > button").click(function () {
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
  // });

    // [2.0.0] credit-tab-box
  // =========================== //

  $(".guide-v-tab > button").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
  });





}); //ready end
