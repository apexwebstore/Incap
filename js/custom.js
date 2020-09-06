(function($){
	// Preloader
	$(window).on("load", function(){
		$(".preloader").fadeOut();
	});
	
	$(document).ready(function(){
		/*=============================================*/
		/*----------- [_Toggle_Search_Box] ------------*/
		/*=============================================*/
		var $showsearchbox = $(".search-icon i");
		var $togglesearchbox = $(".searchbox");
		$(document).on('click', function(e) {
			var clickID = e.target.id;
			if ((clickID !== 's')) {
				$togglesearchbox.removeClass('show');
			}
		});
		$showsearchbox.on('click', function(e) {
			event.stopPropagation();
		});
		$('.search-form').on('click', function(e) {
			event.stopPropagation();
		});
		$showsearchbox.on('click', function(e) {
			if (!$togglesearchbox.hasClass("show")) {
				$togglesearchbox.addClass('show');
				event.preventDefault();
			} else
				$togglesearchbox.removeClass('show');
			event.preventDefault();

			if (!$showsearchbox.hasClass("active"))
				$showsearchbox.addClass('active');
			else
				$showsearchbox.removeClass('active');
		});

		// Sticky Navigation Bar
		$(window).scroll(function(){
			var scrollHeight = $(document).scrollTop();
			if(scrollHeight > 50){
				$('.navigation-area').addClass('navigation-fixed');
			}else{
				$('.navigation-area').removeClass('navigation-fixed');
			}
		});

		// Mobile Menu
		$('#mobile-menu').meanmenu({
			meanMenuContainer	: '.mobile-menu',
			meanScreenWidth		: '991',
			meanMenuClose 		: '<i class="fas fa-times"></i>'
		});

		new WOW().init();
		
		$(".round-progress").circlos();

		$('.partnar-slider').owlCarousel({
		    loop			:true,
		    responsiveClass	:true,
		    nav				: false,
		    dots 			: false,
		    responsive 		:{
		        0:{
		            items:2
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});


		$("#accordion1, #accordion2").accordion({
			collapsible		: true
		});
	});
}(jQuery))
