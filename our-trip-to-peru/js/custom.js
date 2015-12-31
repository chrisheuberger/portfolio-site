$(document).ready(function(){

  squareThumbnails();
  $(window).onresize = squareThumbnails;
  
  function squareThumbnails() {
    var cw = $('.thumb').width();
    $('.thumb').css({'height':cw+'px'});
  }

  $(window).scroll(function() {
    if ($(window).scrollTop() > 120 ){
      $('.page-title').fadeOut();
    } else {
      $('.page-title').fadeIn();
    };
  });

  $("img").unveil(200, function() {
    $(this).load(function() {
      this.style.opacity = 1;
    });
  });

})
