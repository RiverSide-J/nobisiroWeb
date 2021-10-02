$(document).ready(function(){
  fetch("https://nobisiroweb.microcms.io/api/v1/news", 
  {
    headers:{
      "X-API-KEY": "25c6040c-38a7-4156-81ff-21aabe6c1f94"
    }
  }).then(res => res.json()).then(json => {
    // コンテンツの数分、繰り返す（for文）
    // appendの場合、囲むのは丸カッコ→（）
    for(const content of json.contents){
      // microCMSからデータ取得
      // microCMSからデータ取得
      // data←定数 2021/08/20/11/04
      let date = content.day;
      // 定数[date]を配列に置き換える
      const dateAyray = date.split('-');
      // 年・月・日・時刻の定数、変数を作成する。
      const year = dateAyray[0];
      const manth = dateAyray[1];
      const now = dateAyray[2].slice(0,2);
      const minutes = dateAyray[2].slice(6,8);
      
      // 日本時間で表示するには[+9時間]する必要がある
      let hour = dateAyray[2].slice(3,5);
      hour = parseInt(hour);
      hour = hour + 9;
      // もしものために
      if(hour >= 24){
        hour = hour - 24;
      }

      // それぞれサイト上に出力したい形にする
      // 年・月・日・：「分」の順で並べる[カスタム可能]
      date = manth + '月' + now + '日 ' + hour + ':' + minutes;

      // 日時・カテゴリ・タイトル
      $("#list").append(
        '<li class="newsUnit_menu-Row">' +
          '<div class="newsUnit_menu-Rowlead">'+
            '<p class="newsUnit_text">' + 
              content.category + 
            '</p>'+
            '<p class="newsUnit_text">' + 
              date + 
            '</p>'+
          '</div>'+
          '<h2 class="newsUnit_titleText">' + 
            content.title + 
          '</h2>'+
        '</li>'
      );
    };
  });
});