// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53787405-1', 'auto');
ga('send', 'pageview');

// document ready

$(function() {

  // mobile nav

  let $menu = $("#menu"),
      $menulink = $(".mobile-menu-link");

  $menulink.click(function () {
    $menulink.toggleClass("active");
    if ($menu.is(":hidden")) {
      $menu.slideDown("fast");
    } else {
      $menu.slideUp();
    }
    return false;
  });

  $(".menu-tab").on("click", function () {
    $(".mobile-menu-group").toggleClass("showing");
  });

  let checkMobileViewed = false;
  function mobileViewed() {
    console.log(
      'Regarding the mobile menu tab icon, my last name is pronounced "HI-ber-ger." Do you get it? Like, but, do you %cget',
      "font-style: italic; color:MediumSeaGreen;",
      "it?",
      "\n" + "design reference: https://www.ibm.com/design/language/elements/logos/rebus/#ibm-rebus",
      "\n" + "movie reference: https://www.youtube.com/watch?v=oBoPQUIowHY"
    );
    checkMobileViewed = true;
  }
  if ($(window).width() < 767) {
    mobileViewed();
  }

  $(window).resize(function () {
    if ($(window).width() > 768) {
      if ($menulink.hasClass("active")) {
        $menulink.removeClass("active");
      }
      $menu.css("display", "");
    }
    if ($(window).width() < 767 && checkMobileViewed == false) {
      mobileViewed();
    }
  });

  // jump-to-top scroll animation

  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 });
  });

  // show/hide jump-to-top on scroll

  let offset = 1000,
      animation = $(".top");

  $(window).scroll(function () {
    $(this).scrollTop() > offset ? animation.addClass("top-visible") : animation.removeClass("top-visible");
  });

  // footer date

  let date = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  $(".date").append(days[date.getDay()] + ".");

});