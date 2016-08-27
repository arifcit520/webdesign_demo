jQuery(document).ready(function(){
	//enlax
	jQuery(".header").enllax();
	//wow
	new WOW().init();
	//scroll function
	jQuery(window).scroll(function(){
		var x = jQuery(window).scrollTop();
		if(x > 700){
			jQuery(".totop").show();
		}
		else{
			jQuery(".totop").hide();
		}
	});
	//totop
	jQuery(".totop").click(function(){
		jQuery("html").animate({'scrollTop' : '0'},1200);
	});
	//menu responsive
	jQuery(".menu").click(function(){
		jQuery(".main-menu ul").toggle(600);
	});
});