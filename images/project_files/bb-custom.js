jQuery(document).ready(function($) {

    "use strict";
	
	// Remove margins and paddings for hero
	if($('.fl-row-full-width').length > 0) {
		if ( $( window ).width() > 768 || $( '.fl-row' ).hasClass( 'fl-row-full-width' ) ) {
			$(this).find('.entry-content').css({'max-width': '100%'});

			// Add the calculated Video height as a min-height
			setTimeout(function(){
				$('.fl-row-full-width').each(function(){
					var videoContentHeight = jQuery(this).find('video').height();
					$(this).find('.fl-row-full-height, .fl-row-content-wrap, .sph-hero, .overlay').css({'min-height':  videoContentHeight});
					$(this).find('.fl-bg-video').css({'max-height':  videoContentHeight});
				});
			}, 500);
			/**
			 * Do the magic on resize as well
			 */
			jQuery(window).resize( function() {
				// Add the calculated Video height as a min-height
				$('.fl-row-full-width').each(function(){
					var videoContentHeight = jQuery(this).find('video').height();
					$(this).find('.fl-row-full-height, .fl-row-content-wrap, .sph-hero, .overlay').css({'min-height':  videoContentHeight});
					$(this).find('.fl-bg-video').css({'max-height':  videoContentHeight});
				});
				
			});
			// Add the calculated slideshow width as a min-Width
			$('.fl-row-full-width').each(function(){
				var heroContentWidth = jQuery(this).width();
				$(this).find('.fl-slideshow-image, .fl-slideshow-main-image').css({'min-width':  heroContentWidth});
				// Removing margins for BB full-width layout
				$(this).closest('.entry-content').css({'margin-left' : '0', 'margin-right' : '0'});
				
			});
			// Add the calculated Video height as a min-height
			setTimeout(function(){
				$('.fl-row-full-width').each(function(){
					var videoContentHeight = jQuery(this).find('video').height();
					$(this).find('.fl-row-full-height, .fl-row-content-wrap').css({'min-height':  videoContentHeight});
				});
			}, 500);
		}
		/**
		 * Apply a negative margin to the parallax hero
		 * When using the full width layout, the hero element needs to break outside of .site-main.
		 * So we calculate the distance between .site-main and the edge of the browser window and
		 * apply a negative left/right margin to the hero component equal to that distance.
		 */
		$('.fl-row-full-width').parent('.fl-builder-content').each(function(){
			$(this).addClass('force-full-width');
		});
	}
});