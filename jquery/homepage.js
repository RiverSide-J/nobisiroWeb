const swiper = new Swiper('.swiper-container', {
  // スライドメニューの表示方法
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 1000,
  },
  // スライドのページネーション表示
  pagination: {
    el: '.swiper-pagination',
  },
  // 「次へ」や「戻る」のアイコン表示
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // スクロールバーの表示
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});