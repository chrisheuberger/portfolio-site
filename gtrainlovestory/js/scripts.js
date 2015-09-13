$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '70%'
	});

	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '70%'
	});

	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp');
	}, {
		offset: '70%'
	});

	/***************** Tooltips ******************/

    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the icon */

	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});

	/* When user clicks a link */

	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

  $(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 100) {
				$('section.navigation').css({
					"background": "#232731"
				});
				$('header').css({
					"border-bottom": "none",
				});
			} else {
				$('section.navigation').css({
					"background": "none"
				});
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)"
				});
			}
		});
	});

	/***************** Smooth Scrolling ******************/

	$(function() {

		var headerHeight = $("header").height() - 30;

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - headerHeight
					}, 1500);
					return false;
				}
			}
		});

	});

	/***************** Hide/Show Video ******************/

	$(function() {

		$(".viddy").hide();
	  $(".reveal").click(function(){
	    $(".viddy").slideToggle();
	  });

	});

});
