  //ハンバーガーメニュー
  
  $('.burger-btn').on('click',function(){ //.burger-btnをクリックすると

      $('.burger-btn').toggleClass('close'); //.burger-btnにcloseというclassを追加/削除する
      $('.nav-wrapper').fadeToggle(500); //.nav-wrapperがフェードイン/フェードアウトする
      $('body').toggleClass('noscroll');//スクロールさせない
    });



  //スライダー

  $('.slider').slick({
    // autoplay:true,
    // autoplaySpeed:5000,
    dots:true,
    slidesToShow:2, //表示するスライドの数
    //slidesToScroll:2, //１度にスクロールする数

    responsive:[
      {
          breakpoint: 480,
          settings:{
              slidesToShow:1,
          }
      },
  ]
});