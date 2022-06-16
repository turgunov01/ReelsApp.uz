document.addEventListener("DOMContentLoaded", function () {

  let lang = document.querySelector('.header__lang')
  let span = document.querySelector('.header__present-lang')

  span.addEventListener('click', function () {
    lang.classList.toggle('active')
    lang.style.transition = '200ms'
  })


  var swiper = null
  initBottomSlider()

  var card = null
  initCardsSlider()


  function initCardsSlider() {
    card = new Swiper(".cards-swiper", {
      loop: true,
      // UPDATE-RESIZE
      speed: 800,
      autoHeight: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      grabCursor: true,
      spaceBetween: 2,
      initialSlide: 1,
      keyboardControl: false,
      resizeReInit: true,
      autoplay: {
        delay: 5000,
        speed: 2000,
        transition: 1000,
      },
      autoplayDisableOnInteraction: false,

      breakpoints: {
        0: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 'auto',
          spaceBetween: 20,

        },

        800: {
          slidesPerView: 3,
          centeredSlides: false,
          loop: false,
          autoplay: false,
        }
      },
    });
  }


  function initBottomSlider() {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,

      // EFFECT TYPES - TYPE 1
      // effect: 'cube',
      // cubeEffect: {
      //   duration: 3000,
      //   slideShadows: true,
      // },

      // EFFECT TYPES - TYPE 2
      // effect: 'coverflow',
      // coverflowEffect: {
      //   rotate: 30,
      //   slideShadows: false,
      //   duration: 5000,
      //   speed: 2000,
      //   transition: 2000,
      // },

      // EFFECT TYPES - TYPE 3
      // effect: 'flip',
      // flipEffect: {
      //   slideShadows: true,
      // },


      autoplay: {
        delay: 5000,
        speed: 5000,
        transition: 2000,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }


  window.addEventListener('resize', function () {
    swiper.destroy()
    initBottomSlider()

    card.destroy()
    initCardsSlider()
  })


  // var date = new Date();
  // function track_user() {
  //     setInterval(function() {
  //         date.setTime(date.getTime()+(2*1000));
  //         document.cookie = "enter=1; expires="+ date.toGMTString() + "; path=/";
  //     }, 1000);
  // }
  // track_user();



  // document.addEventListener('keypress', (event) => {
  //     var name = event.key;
  //     var code = event;
  //     console.log(name, code)
  // })

  // //   

})