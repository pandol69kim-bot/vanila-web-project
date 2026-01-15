/** Header Chagne Effect **/
const stickyHeader = () => {
  const header = document.querySelector('#header');
  const scry = window.scrollY;
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll', stickyHeader);

/** Scroll Reveal Effect**/
const sr = ScrollReveal({
  reset: false, // 스크롤 올렸을때 다시 실해 여부
});

sr.reveal('.landing-text-box', {
  direction: 1000,
  origin: 'right',
  distance: '50px',
  duration: 3000,
});
