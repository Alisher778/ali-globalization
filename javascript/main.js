$(document).ready(function(){
	$('.menu-bar').click(function(){
		
		$('.nav-bar').toggleClass('show-menu-bar');
		$('.icon-bar.one').toggleClass('active');
		$('.icon-bar.three').toggleClass('active');
		
		$('.nav-bar.show-menu-bar .nav-links').click(function(){
			$('.nav-bar').removeClass('show-menu-bar');
			$('.icon-bar.one').removeClass('active');
			$('.icon-bar.three').removeClass('active');
		})
	});

	//  On Scroll Change navbar background color
 	
 
	$(document).scroll(function(){
	  	var deviceWidth = $(document).width();
		var scrollTop = $(document).scrollTop();
	
	    if(deviceWidth < 1280 && scrollTop > 100){
	  	
	    	$('nav').css('background-color', '#027369');
	
	    }else{
	    		$('nav').css('background-color', 'transparent')
	    	}
  	});

	// On click display Coming soon message
	$('.load-more').click(function(){
		$('.coming-soon').css({'animation':'show 3s', 'z-index':'7'});
		// remove this animation after 3s
		setTimeout(function(){$('.coming-soon').removeAttr('style')}, 3000)
	    		
	});

	// Send email with EmailJS


	$('form').submit(function(e){
		e.preventDefault();
		var data = $('form').serializeArray();
		var name = data[0].value;
		var email = data[1].value;
		var phone = data[2].value;
		var message = data[3].value;
		

		var email_options = {name: name, email: email, phone: phone, message: message};

	 	emailjs.send("default_service","template_WARSTBE4", email_options);
	 	// after submit reset form
	 	$("form")[0].reset();
	 	// display animation
	 	$('.message').css('animation', 'show 5s');
	 	// remove this animation after 3s
	 	setTimeout(function(){$('.coming-soon').removeAttr('style')}, 3000);
		
	});


	// On arrow click Scroll top animation
	$("#scrol-btn").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, 2000);
  		return false;
	});

}) 