(function(){
	
	var blackBox = "<div class='black-box'></div>";
	var contactBox = "<div class='pop-image'><h1>Contact Us!</h1><p class='ion-close'></p><form action='https://getsimpleform.com/messages?form_api_token=9ae67f21edecba44239121d58ceea4fa' method='post' class='form-group has-danger'><input type='hidden'/><div class='form-group'><label for=''>Email: </label><input id='email-input' type='email' name='email' class='form-control-sm' placeholder='Enter your eMail here!'></div><fieldset class='form-group'><label for='exampleTextarea'>Text:  </label><textarea name='message' class='form-control' id='exampleTextarea' rows='5'></textarea></fieldset><button class='btn btn-primary sub'>SEND</button></form><div id='send'><p>SEND</p</div></div>";
	var thanks ="<div class='pop-image'><p class='ion-close'><div class='thanks'><h4>Thank you for submitting your info!</h4><h5>We will contact you shortly!</h5></div></div>";
	
	$('.ion-navicon-round').click(function(){
		$(this).css({'opacity': 0});
		$('nav').css({'margin-top': 0});
	});
	$('.ion-close-circled').click(function(){
		$('.ion-navicon-round').css({'opacity': 1});
		$('nav').css({'margin-top': -450 + 'px'});
	});
	$(window).scroll(function(){
		var windowWidth = $(window).width();
		var navToTop = ($('nav').offset().top)- $(window).scrollTop();
		var headerBottom = (440) -$(window).scrollTop();
		console.log(windowWidth);
		console.log('header: ' + headerBottom);
		if(windowWidth >= 720){
			if(navToTop <= 0){
				$('nav').addClass('fixed');
			}
			if(headerBottom >= 0){
				$('nav').removeClass('fixed');
			}
		}
	});
	
	$('.contact').click(function(){
		$('body').append(blackBox);
		$('.black-box').append(contactBox);
	});
	$('.ion-close').click(function(){
		$('.black-box').remove();
	});
	
		$('body').on('click', '.ion-close', function(){
			$('.thanks').remove();
			$('.pop-image').remove();
			$('.black-box').remove();		
		});
	
		$('body').on('click', '#send', function(){
			//$('.pop-image').remove();
			$('.black-box').append(thanks);
			setTimeout(function(){
				$( ".sub" ).trigger( "click" );
			}, 1500 );
		});
	
		function clickScroll(className, targetClass){
		$(className).click(function(){
			$('html, body').animate({
				scrollTop: ($(targetClass).offset().top-150)
			}, 'slow');
		});
	}
	clickScroll('.info','.second-row-info');
	clickScroll('.active','header');
	
})();