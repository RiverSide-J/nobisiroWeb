$(document).ready(function(){
  fetch("https://nobisiroweb.microcms.io/api/v1/portfolio", 
  {
    headers:{
      "X-API-KEY": "25c6040c-38a7-4156-81ff-21aabe6c1f94"
    }
  }).then(res => res.json()).then(json => {
    // コンテンツの数分、繰り返す（for文）
    // appendの場合、囲むのは丸カッコ→（）
    for(const content of json.contents){
      // microCMSからデータ取得
      const title = content.title;
      const thumbnail = content.thumbnail.url;
      const url = content.url;
      
      $("#portfolio_list").append(
        '<li class="swiper-slide">' +
          '<a href="' + url + '">' +
            '<img src="'+ thumbnail +'" />' +
            '<h3>' + title + '</h3>' +
          '</a>' +
        '</li>'
      );
    };
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
});