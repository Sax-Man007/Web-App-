var TestimonialSlider = {
	slider: null,
	sliderOptions: function (s) {
      var options = {};
      if ( $(s + '.swiper-container .swiper-slide').length == 1 ) {
         // Options for 1 slide
         // We need to still create it because our testimonial component includes swiper-css
         options = {
            speed: 300,
            effect: 'fade',
            loop: false,
            noSwiping: true
         }
      } else {
         options = {
            speed: 300,
            effect: 'fade',
            loop: true,
            navigation: {
               nextEl: '.swiper-custom-arrow-next',
               prevEl: '.swiper-custom-arrow-prev',
            },
            pagination: {
               type: 'fraction',
               el: '.swiper-custom-fraction-pager',
               modifierClass: 'swiper-custom-fraction-pager-',
            },
            breakpointsInverse: true,
            breakpoints: {
               320: {
                  noSwiping: false,
               },
               992: {
                  noSwiping: true,
                  noSwipingClass: 'testimonial-slide'
               }
            }
         }
      }

      this.slider = new Swiper(s, options);
	},

	init: function () {
		// Set up the slider
		var sliderClass = '.testimonial-slider';
      TestimonialSlider.sliderOptions(sliderClass);
      
      // Don't show the pager/arrows if only one slide
      if($(sliderClass + '.swiper-container .swiper-slide').length == 1) {
         $('.swiper-custom-arrow i').addClass('lv-display-none');
      }
	}
};

