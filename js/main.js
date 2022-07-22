$(function () {
  $(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $(".overlay").toggleClass('active');
    
  });
  $(".overlay li").click(function () {
    $(".openbtn1").removeClass('active');
    $(".overlay").removeClass('active');
    
  });
  $(".accordion ul li h2").on("click", function () {
    let find = $(this).next("div");
    $(find).slideToggle();
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
    }
    
  });

});