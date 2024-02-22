var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
   loop:true,
   autoplay:true
  });
  // -----------------------------------------------------------------------
// -------------------------------------------------------------------------
// ---------------------------------------------------------------------------

$('.slider-aboutPage-nextOne').slick({
    dots: false,
    infinite: true,
    loop:true,
    autoplay:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'  <span class="prev_arrow"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:'  <span class="next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  AOS.init();