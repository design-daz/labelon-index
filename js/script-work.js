$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        slidesPerView: 7,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slideToClickedSlide : true,
      });


      $(".curr-sld-btn").click(function () {
        // $(".login-box").stop().fadeOut().removeClass("active");
        $(".curr-work-img-box").stop().toggleClass("on");
        $(".curr-sld-box").stop().toggleClass("on");

        $(".curr-sld-btn").stop().toggleClass("on");
        // $(".login-float-btn-box").stop().fadeIn().toggleClass("active");
  
  
      });


      $(".label-area > button").click(function () {

        $(this).stop().toggleClass("active");
        $(this).siblings().removeClass("active");

      });




}); //ready end
