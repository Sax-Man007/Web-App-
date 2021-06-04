$(document).ready(function(){
	/* New Header */
	$(".top-navigation .left-part ul li:last").css("border","none");
	$(".main-navigation ul li:last").css('background','none');
	$(".top-navigation .left-part ul li:first").css('padding-left',0); 
	
	$("ul.tabs-nav li:last").css("border-right","none");
	
	$('.navigation-block-toggle-icon').click(function(){
		$('#navigation_div').toggle(500);
	});	
	$(window).resize(function(){
		if ($(window).width() < 691 || window.screen.width < 691) {
			$("#navigation_div").css({'height': $(window).height()-46+'px', 'overflow-y':'auto'});
			$(".flex-viewport ul.slides > li").css({'width': $(window).width()+'px'});
		}
	});
	if ($(window).width() < 691 || window.screen.width < 691) {
		$("#navigation_div").css({'height': $(window).height()-46+'px', 'overflow-y':'auto'});
	}
});


$(document).ready(function(){
	$(".content-left .block:nth-child(3n+0)").css("margin-right",0);
	
	/* DD Menu for Mobile */
	var flag = false;
	$(".sub-menu").click(function(){
		if(flag == false){
			$(".main-menu-list").slideDown('slow', function(){ flag = true;});
		}
		else{
			$(".main-menu-list").slideUp('slow', function(){ flag = false;});
		}
	});
	
	var flag2 = false;
	$(".up-arrow").click(function(){
		if(flag2 == false){
			$(".sub-menu-list").slideDown('slow', function(){ flag2 = true;});
			$(".up-arrow").removeClass("up-arrow").addClass("down-arrow");
		}
		else{
			$(".sub-menu-list").slideUp('slow', function(){ flag2 = false;});
			$(".down-arrow").removeClass("down-arrow").addClass("up-arrow");
		}
	});
	
	/* Block structure set for Mobile */
	$(window).resize(function(){
		if ($(window).width() < 691 || window.screen.width < 691) {
			$('.content-left .block .i-part .block-title').each(function(i) {
				var htmlObj1 = $(this);
				$('.content-left .block:eq("'+i+'")').prepend(htmlObj1);
			})
			$('.content-left .block .i-part .block-caption').each(function(i) {
				var htmlObj2 = $(this);
				$('.content-left .c-part:eq("'+i+'")').prepend(htmlObj2);
			})
			
			$(".content-left .block:gt(5)").hide();
		}
		else{
			$('.content-left .block .block-title').each(function(i) {
				var htmlObj1 = $(this);
				$('.content-left .block .i-part:eq("'+i+'")').append(htmlObj1);
			})
			$('.content-left .block .c-part .block-caption').each(function(i) {
				var htmlObj2 = $(this);
				$('.content-left .i-part:eq("'+i+'")').append(htmlObj2);
			})
			
			$(".content-left .block").show();
		}
	});
	if ($(window).width() < 691 || window.screen.width < 691) {
		$('.content-left .block .i-part .block-title').each(function(i) {
			var htmlObj1 = $(this);
			$('.content-left .block:eq("'+i+'")').prepend(htmlObj1);
		})
		$('.content-left .block .i-part .block-caption').each(function(i) {
			var htmlObj2 = $(this);
			$('.content-left .c-part:eq("'+i+'")').prepend(htmlObj2);
		})
		
		$(".content-left .block:gt(5)").hide();
	}
	else{
		$('.content-left .block .block-title').each(function(i) {
			var htmlObj1 = $(this);
			$('.content-left .block .i-part:eq("'+i+'")').append(htmlObj1);
		})
		$('.content-left .block .c-part .block-caption').each(function(i) {
			var htmlObj2 = $(this);
			$('.content-left .i-part:eq("'+i+'")').append(htmlObj2);
		})
		
		$(".content-left .block").show();
	}
});