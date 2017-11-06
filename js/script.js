$(document).ready(function() {

    $('.single-item').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
    });
    // activing the mneu..
     var clicked = false;
    $('.c-menu').on('click',function() {
    	/* Act on the event */
    	if(!clicked){
		$('body').toggleClass('scroll--is--hidden');
    	$('.c-menu-page').toggleClass('menu-is-open');
    	$('.c__titel').toggleClass('change--me');
    	$('.c-menu__bar').toggleClass('change--me-3');
    	$('.link').removeClass('link--is--active');
    	$('.c-menu-body').removeClass('mnue--is--active')
    		clicked = true;
    		$(this).toggleClass('active');
    		setTimeout(function() {
    			clicked = false;
    		},1450);
    	} 
    });
   // tabs !!
   	var tabNumber = $('.link').attr('tab--num');
   $('.link').on('click', function() {
   	/* Act on the event */

   	$('#'+tabNumber).addClass('mnue--is--active').closest().removeClass('mnue--is--active');
   	$('.c__titel').removeClass('change--me');
   	$('.c-menu').addClass('is--hidden')
	$('.l-backe').removeClass('is--hidden')
   });

   $('.l-backe').on('click', function() {
   	/* Act on the event */
   	$(this).addClass('is--hidden')
   	$('.c-menu').removeClass('is--hidden')
   	$('#'+tabNumber).removeClass('mnue--is--active');
   	$('.c__titel').toggleClass('change--me');
   });

});
