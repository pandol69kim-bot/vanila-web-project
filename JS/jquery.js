// $(document).ready(function () {
//   // some jquery
// });

$(function () {
  $('.nav-lists li').on('click', function () {
    const targetIndex = $(this).index(); // 클릭한 대상의 인덱스 저장
    const pagePosition = $('.nav-target').eq(targetIndex).offset().top; // 해당 인텍스의 .nav-target 위치 저장
    alert(pagePosition);
    $('html, body').animate({ scrollTop: pagePosition }, 300); // 부드럽게 스크롤 이동
  });
});
