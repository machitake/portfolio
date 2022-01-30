  //ハンバーガーメニュー
  
  $('.burger-btn').on('click',function(){ //.burger-btnをクリックすると

      $('.burger-btn').toggleClass('close'); //.burger-btnにcloseというclassを追加/削除する
      $('.nav-wrapper').fadeToggle(500); //.nav-wrapperがフェードイン/フェードアウトする
      $('body').toggleClass('noscroll');//スクロールさせない
    });

  $('.nav-item').on('click',function(){ //.nav-itemをクリックすると

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

  //wow
  new WOW().init();

  //accordion
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();//スライドさせながら表示
    $(this).toggleClass("open"); //クラス名(open)の CSS がある場合は削除を行い、なければ追加する
  });