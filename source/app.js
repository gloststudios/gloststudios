$(document).ready(function() {
	// Fade the body in
	$('body').addClass('visible');

	// Menu system
	(function() {
		$('.menu-wrapper.right').on('click', function() {
			$('.hamburger-menu').toggleClass('animate')
			$('body').toggleClass('no-scroll')
			$('.navigation-menu').toggleClass('visible')
		})
	})()
})
