$(document).ready(function() {

	/***************** Waypoints ******************/

	// $('section').waypoint(function() {
	// 	var id = $(this).attr('id');
	// 	$('a').removeClass('active');
	// 	$("[href=#"+id+"]").addClass('active');
	// });

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

	/***************** Modal ******************/

	$('li img').on('click',function(){
	  var src = $(this).attr('src');
	  var img = '<img src="' + src + '" class="img-responsive"/>';

	  var index = $(this).parent('li').index();
    var html = '';
    html += img;
    html += '<div style="height:25px;clear:both;display:block;">';
    html += '<a class="controls next" href="'+ (index+2) + '">next <i class="fa fa-chevron-right"></i></a>';
    html += '<a class="controls previous" href="' + (index) + '"><i class="fa fa-chevron-left"></i> prev</a>';
    html += '</div>';

	  $('#myModal').modal();
	  $('#myModal').on('shown.bs.modal', function(){
	  	$('#myModal .modal-body').html(html);
	  });
	  $('#myModal').on('hidden.bs.modal', function(){
	    $('#myModal .modal-body').html('');
	  });
	});


	/***************** Smooth Scrolling ******************/

	$(function() {

		var headerHeight = $("header").height() - 60;

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

});

$(document).on('click', 'a.controls', function(){
  var index = $(this).attr('href');
	var src = $('ul.row li:nth-child('+ index +') img').attr('src');             
	
	$('.modal-body img').attr('src', src);
	
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('ul.row li').length + 1; 
	//hide next button
	if(total === newNextIndex){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}
	
	return false;
});
