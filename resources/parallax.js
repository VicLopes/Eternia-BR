function castParallax() {

	var opThresh = 350;
	var opFactor = 750;

	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});

}

function dispelParallax() {
	jQuery("#nonparallax").css('display','block');
	jQuery("#parallax").css('display','none');
}

function castSmoothScroll() {
	jQuery.srSmoothscroll({
		step: 80,
		speed: 300,
		ease: 'linear'
	});
}

jQuery(document).ready(function($) {

	// Set menu
	$('.menu-toggle').on('click', function(e){
		e.preventDefault();
		$('#nav .menu').slideToggle();
		$(this).toggleClass('open');
	});

	var platform = navigator.platform.toLowerCase();
	var userAgent = navigator.userAgent.toLowerCase();

	if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ) {
		dispelParallax();
	}	else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1) {
		castParallax();
		if ($.browser.webkit)	{
			castSmoothScroll();
		}
	}	else {
		castParallax();
	}

});
