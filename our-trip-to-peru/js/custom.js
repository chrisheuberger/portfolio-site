$(document).ready(function(){

  squareThumbnails();
  window.onresize = squareThumbnails;
  
  function squareThumbnails() {
    var cw = $('.thumb').width();
    $('.thumb').css({'height':cw+'px'});
  }

  $(window).scroll(function() {
    if ($(window).scrollTop() > 120 ){
      $('.header-title').fadeOut();
    } else {
      $('.header-title').fadeIn();
    };
  });

})
