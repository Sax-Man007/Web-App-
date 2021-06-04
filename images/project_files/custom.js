jQuery(document).ready(function($) {

    "use strict";

	$('#masthead > .col-full').wrap('<div class="navbar-inner-wrapper"></div>');
	
	if( $('#masthead .above-navigation').length > 0 ){
		$('#masthead .site-branding').css('margin-bottom', '0');
		$('#masthead .sc-icons li a').css('color', $('.site-description').css('color'));
	}

	// Sticky Header
	if($('body').hasClass('sp-header-sticky') && $('body').hasClass('fl-builder-edit') === false){
		$('#masthead').waypoint(function(direction) {
		   if (direction == 'down') {
			$('.storefront-primary-navigation').hide().addClass('stuck').delay(200).slideDown();
			}
		  if (direction == 'up') {
			$('.storefront-primary-navigation').removeClass('stuck');
		  }
		  }, {
			offset: '-25%'
		});
	}
    
    //Parallax
    var parallaxBtnContent = $('.sph-hero-content p:last-child a').text();
    parallaxBtnContent = parallaxBtnContent.replace(' ', '<br/>');
    var parallaxBtnURL = $('.sph-hero-content p:last-child a').attr('href');
    $('.sph-hero-content p:last-child').remove();
    $('.sph-inner').append('<a class="mysph-btn" href="' + parallaxBtnURL + '"><div class="middle">' + parallaxBtnContent + '</div></a>');
	
 	//WooCommerce Loop
 	$('ul.products li.product .woocommerce-LoopProduct-link').each(function(){
 		$(this).find('img').removeAttr('width').removeAttr('height').removeAttr('srcset').removeAttr('sizes');
 		$(this).find('img').wrap('<div class="product-thumbnail">');
 		if($(this).find('span.price').length > 0){
 			var productPrice = $(this).find('span.price').get(0).outerHTML;
 			$(this).find('span.price').remove();
 			$(this).find('.product-thumbnail').after(productPrice);
 		}
 		$(this).closest('li').find('a.button').removeClass('button').addClass('btn-special');
 	});
	
    //Single Product Page
    $('.single_add_to_cart_button').removeClass('button').addClass('btn-special');
    $('#respond .form-submit input[type="submit"]').addClass('btn-special');
	setTimeout(function(){
		if($('.woocommerce-product-gallery__trigger').length > 0 && $('.flex-viewport').length > 0) {
			$('.flex-viewport').prepend($('.woocommerce-product-gallery__trigger').get(0));
		}
	}, 100);
    //Shop by Category
	$('.storefront-product-categories ul.products li.product').each(function(){
		var productCategoryURL = $(this).find('a').attr('href');
		var productCategoryImgSRC = $(this).find('img').attr('src');
		var productCategoryTitle = $(this).find('h2').text().trim();
		var productCategoryDescription = $(this).find('.category-description').text().trim();
		var productCategoryImgExtension = productCategoryImgSRC.split('.').pop();
		var sliceCut = -13;
		switch(productCategoryImgExtension){
			case 'png':
			case 'jpg':
			case 'gif':
				sliceCut = -12;
			break;
			case 'jpeg':
				sliceCut = -13;
			break;
			default:
				sliceCut = -13;
			break;
		}
		$(this).empty();
		$(this).append('<div class=myshbc-box><div class="img-box"><img src="' + productCategoryImgSRC + '"><div class=text-box><h5>' + productCategoryTitle + '</h5><div class=title-line></div><div class="clearfix"></div><br><p>' + productCategoryDescription + '</p><br><a class="btn-special" href="' + productCategoryURL + '">View More</a></div></div></div>');
	});

	//Footer bar
	$('.sfb-footer-bar .widget_text .textwidget').wrapInner('<div class="text">').wrapInner('<div class="promotion-box">');

	//Footer
	$('.site-footer div').first().removeClass('col-full').addClass('row footer-area');
	$('.site-footer .footer-widgets').wrap('<div class="col-full">');
	$('.site-footer .site-info').wrap('<div class="row copyright">').wrap('<div class="col-full">');

	//Adding Back to top button into DOM
    $('.site-footer').append('<a class="scroll-top"><i class="fa fa-angle-double-up"></i></a>');

    //Load Back to top button and functionality
    scroll();

    //Back to top
    function scroll() {
        $(window).scroll(function() {
            $(this).scrollTop() > 300 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut()
        }), $(".scroll-top").click(function() {
            return $("html, body").animate({
                scrollTop: 0
            }, 800), !1
        })
    }

    if($('.sticker').length > 0){
    	$('.sticker').each(function(){
    		$(this).stick_in_parent({
        		offset_top: 20
    		});
    	});
    }
    
    document.documentElement.style.overflowX = 'hidden';

    

});
