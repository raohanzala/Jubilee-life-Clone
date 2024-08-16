
    // new Swiper('.mySwiper', {
    //   speed: 600,
    //   loop: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    //   },
    //   slidesPerView: 'auto',
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //   },
    // });

    const footerBtn = document.querySelector("#footer-btn")
    const footermain = document.querySelector(".footer-main")

    footerBtn.addEventListener("click", function(){
      footermain.classList.toggle("show")
    })