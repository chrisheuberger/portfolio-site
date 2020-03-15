(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53787405-1', 'auto');
ga('send', 'pageview');

$(function(){

  $(".title").lettering();

  var InfiniteRotator = {
    init: function() {
      var initialFadeIn = 100;
      var itemInterval = 400;
      var fadeTime = 0;
      var numberOfItems = $(".rotating-item").length;
      var currentItem = 0;
      $(".rotating-item")
        .eq(currentItem)
        .show(initialFadeIn);
      var infiniteLoop = setInterval(function() {
        $(".rotating-item")
          .eq(currentItem)
          .hide(fadeTime);
        if (currentItem == numberOfItems - 1) {
          currentItem = 0;
        } else {
          currentItem++;
        }
        $(".rotating-item")
          .eq(currentItem)
          .show(fadeTime);
      }, itemInterval);
    }
  };

  InfiniteRotator.init();

});

$(window).scroll(function() {
  $("#rotating-item-wrapper").css("opacity", 1 - $(window).scrollTop() / 50);
  $(".welcome").css("opacity", 0 + $(window).scrollTop() / 50);
});
