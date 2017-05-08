$(document).ready(function(){
	$('.menu-bar').click(function(){
	
		$('.nav-bar').addClass('show-menu-bar');
		$('.close-bar').click(function(){
			$('.nav-bar').removeClass('show-menu-bar');
		})
	});

	$('form').submit(function(e){
		e.preventDefault();
		var data = $('form').serializeArray();
		var name = data[0].value;
		var email = data[1].value;
		var phone = data[2].value;
		var message = data[3].value;
		

		var email_options = {name: name, email: email, phone: phone, message: message};

	 	emailjs.send("default_service","template_WARSTBE4", email_options)
	 	$("form")[0].reset();
	 	$('.message').css('animation', 'show 5s', function(){
	 		$(this).css('animation', 'none')
	 	})
		
	})
}) 