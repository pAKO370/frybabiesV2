(function(){
	
	var blackBox = "<div class='black-box' id='black-photos'></div>";
	var fryImages = "<div class='pop-image'><img src='' class='black-image' alt=''><img src='assets/images/CloseButton.png' class='close' alt=''></div>";
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
	
	var photosDiv = '';
	var imageGalleryArray = ['assets/images/fry1.jpg','assets/images/fry5.jpg','assets/images/fry2.jpg','assets/images/fry6.jpg','assets/images/fry3.jpg','assets/images/fry7.jpg','assets/images/fry4.jpg','assets/images/fry8.jpg','assets/images/fry13.jpg','assets/images/fry9.jpg','assets/images/fry14.jpg','assets/images/fry10.jpg','assets/images/fry15.jpg','assets/images/fry11.jpg','assets/images/fry16.jpg','assets/images/fry12.jpg',];
	
	//for(var i = 0;i < imageGalleryArray.length; i++){
		//$('.gallery-container').append("<div class='photos'><img src='' alt='' id='image" + i + "'></div>");
		//$('#image' + i).attr('src', imageGalleryArray[i]);
	//
	
	$('body').on('click', '.photos img',function(){
			var image = $(this).attr('src');
			console.log(image);
			$('body').append(blackBox);
			$('.black-box').append(fryImages);
			$('.black-image').attr('src', image);
		});
	$('body').on('click', '.close',function(){
		$('.black-image').attr('src', '');
		$('.black-box .black-image').remove();
		$('.black-box').remove();
		console.log('fsgsg');
	})
	
	
	
})();

	/*var imageGalleryArray = ['assets/images/fry1.jpg','assets/images/fry5.jpg','assets/images/fry2.jpg','assets/images/fry6.jpg','assets/images/fry3.jpg','assets/images/fry7.jpg','assets/images/fry4.jpg','assets/images/fry8.jpg','assets/images/fry13.jpg','assets/images/fry9.jpg','assets/images/fry14.jpg','assets/images/fry10.jpg','assets/images/fry15.jpg','assets/images/fry11.jpg','assets/images/fry16.jpg','assets/images/fry12.jpg',];
	
	var galleryDiv = document.getElementsByClassName('gallery-container');
		
	for(var i = 0;i < imageGalleryArray.length; i++){
		var photoDiv = document.createElement('div');
		var img = document.createElement('img');
		img.src = imageGalleryArray[i];
		photoDiv.className = 'photos';
		//console.log(galleryDiv[0]);
		galleryDiv[0].appendChild(photoDiv).appendChild(img);
	}
	var photoClass = document.getElementsByClassName('photos');
	photoClass.addEventListener('mouseover' , function(){
		console.log('dadada');
		this.style('opacity', 1);
	});*/