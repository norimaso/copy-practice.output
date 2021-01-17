var sclFlag = 0;

// ヘッダー表示
$(function () {
  var hd = $('header');
  hd.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      hd.fadeIn();
    } else {
      hd.fadeOut();
    }
  });
});

// メニューを閉じるボタン押下
$(function () {
  $("#mob_nav ul .close").on("click", function () {
    $("#mob_nav").fadeOut();
  });
});

// メニュー画面表示
$(function () {
  $("#mob_header .btn").on("click", function () {
    $("#mob_nav").fadeIn();
  });
});
