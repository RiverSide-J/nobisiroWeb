$(document).ready(function(){
  fetch("https://nobisiroweb.microcms.io/api/v1/blog", 
  {
    headers:{
      "X-API-KEY": "25c6040c-38a7-4156-81ff-21aabe6c1f94"
    }
  }).then(res => res.json()).then(json => {
    // コンテンツの数分、繰り返す（for文）
    // appendの場合、囲むのは丸カッコ→（）
    for(const content of json.contents){
      // microCMSからデータ取得
      const category = content.category;
      const thumbnail = content.thumbnail.url;
      const title = content.title;
      
      $("#blog_list").append(
        '<li class="swiper-slide">' +
          '<a href="">' +
            '<h4 class="slideTop">'+ category +'</h4>'+ 
            '<img class="slideImage" src="'+ thumbnail +'" />' +
            '<h3 class="">' + title + '</h3>' +
          '</a>' +
        '</li>'
      );
    };
    var swiper = new Swiper('.blog', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // 768px以上の場合
        768: {
          slidesPerView: 2,
        },
        // 980px以上の場合
        980: {
          slidesPerView: 3,
        },
      }
    });
  });
});