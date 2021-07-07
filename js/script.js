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
    slidesToShow:3, //表示するスライドの数
    //slidesToScroll:2, //１度にスクロールする数
    prevArrow: '<img src="./img/layer1.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./img/layer2.png" class="slide-arrow next-arrow">',

    responsive:[
      {
          breakpoint: 1024,
          settings:{
              slidesToShow:3,
          }
      },
      {
          breakpoint: 768,
          settings:{
              slidesToShow:2,
          }
      },
      {
          breakpoint: 480,
          settings:{
              slidesToShow:1,
              centerMode: true,
              centerPadding: '10%'
          }
      },
  ]
});