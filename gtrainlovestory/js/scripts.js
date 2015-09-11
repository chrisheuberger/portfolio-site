$(document).ready(function() {

	/***************** Waypoints ******************/

	// $('section').waypoint(function() {
	// 	var id = $(this).attr('id');
	// 	$('a').removeClass('active');
	// 	$("[href=#"+id+"]").addClass('active');
	// });

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeIn');
	}, {
		offset: '10%'
	});

	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeIn');
	}, {
		offset: '10%'
	});

	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeIn');
	}, {
		offset: '10%'
	});

	/***************** Initiate Flexslider ******************/
	
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
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

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});
