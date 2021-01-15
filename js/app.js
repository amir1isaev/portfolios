var mySwiper = new Swiper('.swiper-container', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   breakpoints: {
      555: {
         slidesPerView: 2,
      },
      900: {
         slidesPerView: 2,
      },
      1230: {
         slidesPerView: 3,
      }
   }
})