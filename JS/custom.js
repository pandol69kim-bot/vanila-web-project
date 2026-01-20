/** Scroll Reveal Effect**/
const sr = ScrollReveal({
  reset: false, // 스크롤 올렸을때 다시 실해 여부
});

sr.reveal('.landing-text-box', {
  direction: 1000,
  origin: 'right',
  distance: '80px',
  duration: 1000,
});

sr.reveal('.meet-text-box', {
  direction: 1000,
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
});

sr.reveal('.meet-image-box img, .feature', {
  direction: 1000,
  origin: 'bottom',
  distance: '40px',
  interval: 200, //0.2초 간격으로 차례로 효과진행
  duration: 1000,
});

/** Swiper Slide Effect **/
setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}, 300);

/** Fit Insta Image Height **/
const inataImageHeight = document.querySelector('#h').scrollHeight;
document.querySelector('#fh').style.height = inataImageHeight + 'px';

window.addEventListener('resize', () => {
  const inataImageHeight = document.querySelector('#h').scrollHeight;
  document.querySelector('#fh').style.height = inataImageHeight + 'px';
});
