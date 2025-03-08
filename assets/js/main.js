(function ($) {
	"use strict";
	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1200",
		onePage: true
	});
	// scroll
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 50) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});
	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	// Services Slider
	$(".main-services-container").each(function () {
		let parent = $(this);
		let slider = parent.find(".drag-slider");
		let afterImage = parent.find(".after");
		let parentWidth = parent.width();
	
		// Set initial position to the middle
		let initialPosition = parentWidth / 2 - slider.width() / 2;
		slider.css("left", initialPosition + "px");
	
		// Set the initial clip position for the .after image
		afterImage.css("clip", `rect(0, ${initialPosition}px, 400px, 0)`);
	
		// Make the slider draggable
		slider.draggable({
		  axis: "x",
		  containment: "parent",
		  drag: function (event, ui) {
			let newWidth = ui.position.left;
			afterImage.css("clip", `rect(0, ${newWidth}px, 400px, 0)`);
		  }
		});
	  });


	// client-slider-active
	$('.client-slider-active').owlCarousel({
		loop: true,
		margin: 50,
		items: 5,
		nav: false,
		dots: false,
		autoplay: false,
		responsive: {
			0: {
				items: 2,
				margin: 30,
				nav: false,
			},
			530: {
				items: 3
			},
			767: {
				items: 5
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	})
	
	// testimonial-slider-active
	$('.testimonial-slider-active').owlCarousel({
		loop: true,
		margin: 25,
		items: 1,
		navText: [`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="#000">
<path d="M1.27289 6.79289C0.882366 7.18342 0.882366 7.81658 1.27289 8.20711L7.63685 14.5711C8.02738 14.9616 8.66054 14.9616 9.05107 14.5711C9.44159 14.1805 9.44159 13.5474 9.05107 13.1569L3.39421 7.5L9.05107 1.84315C9.44159 1.45262 9.44159 0.819456 9.05107 0.428931C8.66054 0.038407 8.02738 0.038407 7.63685 0.428931L1.27289 6.79289ZM22 6.5L1.98 6.5V8.5L22 8.5V6.5Z" fill="white"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
<path d="M20.7271 8.70711C21.1176 8.31658 21.1176 7.68342 20.7271 7.29289L14.3631 0.928931C13.9726 0.538407 13.3395 0.538407 12.9489 0.928931C12.5584 1.31946 12.5584 1.95262 12.9489 2.34315L18.6058 8L12.9489 13.6569C12.5584 14.0474 12.5584 14.6805 12.9489 15.0711C13.3395 15.4616 13.9726 15.4616 14.3631 15.0711L20.7271 8.70711ZM0 9H20.02V7H0V9Z" fill="white"/>
</svg>`],
		nav: false,
		dots: true,
		autoplay: false,
	})
	// screenshot-active
	$('.screenshot-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		center: true,
		navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
		nav: true,
		dots: false,
		autoplay: false,
		responsive: {
			0: {
				items: 1,

			},
			767: {
				items: 3,

			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	})
	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#000'
	});
	// WOW active
	new WOW().init();
	//counterUp Start
	$('.counter-value').counterUp({
		delay: 10,
		time: 1000
	});
	//counterUp End
	// map
	function basicmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(32.941236, -97.134178), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "weight": "2.00" }] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [{ "color": "#9c9c9c" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7b7b7b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c8d7d4" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#070707" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }]
		};
		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contact-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(32.941236, -97.134178),
			map: map,
			title: 'Cryptox'
		});
	}
	if ($('#contact-map').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}

})(jQuery);