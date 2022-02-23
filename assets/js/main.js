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

  let $menu = $("#menu");

  $(".menu-tab").on("click", function () {
    $(".mobile-menu-group").toggleClass("showing");
  });

  let checkMobileViewed = false;

  function mobileViewed() {
    console.log(
      '%cRegarding the mobile menu tab icon, my last name is pronounced "HI-ber-ger." Do you get it? Do you get it?',
      "background-color:#6CF1AD;",
      "\n\n" + "design reference: https://www.ibm.com/design/language/elements/logos/rebus/#ibm-rebus",
      "\n" + "movie reference: https://www.youtube.com/watch?v=oBoPQUIowHY"
    );
    checkMobileViewed = true;
  }
  if ($(window).width() < 767) {
    mobileViewed();
  }

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $menu.css("display", "");
    }
    if ($(window).width() < 767 && checkMobileViewed == false) {
      mobileViewed();
    }
  });

  // fade page transition

  document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) { return; }
    var anchors = document.getElementsByTagName('a');
    for (var idx=0; idx<anchors.length; idx+=1) {
      if (anchors[idx].hostname !== window.location.hostname ||
        anchors[idx].pathname === window.location.pathname) {
        continue;
      }
      anchors[idx].addEventListener('click', function(event) {
        var fader = document.getElementById('page-fade-veil'),
            anchor = event.currentTarget;
        
        var listener = function() {
          window.location = anchor.href;
          fader.removeEventListener('animationend', listener);
        };
        fader.addEventListener('animationend', listener);
        
        event.preventDefault();
        
        fader.classList.add('fade-in');
      });
    }
  });

  window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById('page-fade-veil');
    fader.classList.remove('fade-in');
  });

  // link hover effect

  // return color randomly selected from list
  const colorsList = ['#6CF1AD', '#41DFF9', '#8F80FF', '#FF8464', '#FF00A0', '#CECC7D', '#FCE500', '#A8FFD5'];

  const setListedLinkColor = (el) => {
    let randomListedColor = colorsList[Math.floor(Math.random() * colorsList.length)];
    $(el).css("background-color", randomListedColor);
  }

  $(".nav-link, .text-link, .home-intro-link").mouseenter(function() {
    setListedLinkColor(this);
  });

  $(".nav-link, .text-link, .home-intro-link").mouseout(function() {
    $(this).css("background-color", "inherit");
  });

  $(".name-link span").mouseenter(function() {
    let nameSpans = $('.name-link span');
    setListedLinkColor(nameSpans);
  });

  $(".name-link span").mouseout(function() {
    $('.name-link span').css("background-color", "inherit");
  });

  // add image styles only after image has been loaded

  $('.list-mc__img-border, .list-mc__img-full-border').on("load", function () {  
    $(this).addClass('loaded');
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