$(function() {
	
	//Cache the window object
	var $window = $(window);
	
	//To have background moving in a different speed than the foreground
	//Parallax background effect
	$('section[data-type="background"]').each(function() {
		
		var $bgobj = $(this); //assigning the object
		
		$(window).scroll(function() {
			
			// scroll te background at the var speed
			// the yPos is a negative value because we're scrolling it UP!
			
			var yPos = - ($window.scrollTop() / $bgobj.data('speed'));
			
			//Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			//Move the Background
			$bgobj.css({ backgroundPosition: coords });
		
		}); // end window scroll
	});
	
});