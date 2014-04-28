
'use strict';
var //$doc = $(document),
	$body = $('body'),
	$navToggle = $('#nav-toggle'),
	$header = $('header.main'),
	navOpaque = false;
	

function nav(status){
	console.log(status)
	var s = $(window).scrollTop()

	// if (s > $('.intro + section').offset().top && status == true){
	// 	if (status = false){
	// 		$header.addClass('active');

	// 		// if (!$header.hasClass('active')){
	// 		// 	console.log('addClass')
	// 		// 	$header.addClass('active');
	// 		// } else {
	// 		// 	console.log('removeClass')
	// 		// 	$header.removeClass('active');
	// 		// }
	// 	} else {
	// 		$header.removeClass('active');			
	// 	}
	// }
}

$(window).scroll(function(e) {
    var s = $(window).scrollTop(),
    	opacityVal = (s / 200.0);

    $('.bg-cover').css('opacity', 1 - (opacityVal));
    console.log($('.intro').offset().top, s);
    if (s > $('.work').offset().top){
    	nav(true);
    } else {
    	nav(false);
    }
});

$navToggle.on('click',function(event){
	event.preventDefault();
	if ($body.hasClass('nav-open')){
		$body.removeClass('nav-open');
	} else {
		$body.addClass('nav-open');
	}
});	
