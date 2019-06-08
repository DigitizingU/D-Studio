jQuery( document ).ready(function($) {

	function formLabels() {
		formFields.focusout(function(){
		    checkFields($(this));
		});

	}

	function startProjectForm(){
	  
		var parsley = $startProjectForm.parsley();

		var $sections = $startProjectForm.find('.form-section');
		var formNavigation = $startProjectForm.find('.form-navigation');
		var previous = formNavigation.find('.previous');
		var next = formNavigation.find('.next');

		var nameField = $('#nameSP');
		var emailField = $('#emailSP');
		var webServiceField = $('#service-web');
		var imCheck = $('#imSP');
		var usernameBlock = $('.information-username');
		var usernameSP = $('#usernameSP');
		var servicesCont = webServiceField.closest('.work-request--services');


		// change validation messages and customize options
		$startProjectForm.parsley({
			requiredMessage: 'This field is required'      
		});

		emailField.parsley({
			typeMessage: "Enter a valid e-mail address"
		});

		webServiceField.parsley({
			requiredMessage: "Please select the digital service/s you want us to work on", // only works when using the first checkbox in the group
			errorsContainer: function (Field) {
				return servicesCont;
			},
			classHandler: function (Field) {
			 	return servicesCont;
			}
		});



	 	// multi step form
	 	function navigateTo(index) {

			// Mark the current section with the class 'current'
			$sections
				.removeClass('current').delay(200) // keep delay as same as animation speed to fade out in css 
				.queue(function(){
				  $(this).hide().dequeue();
				  
				  $sections.eq(index).show()
				    .addClass('current');
				});
		  

			// Show only the navigation buttons that make sense for the current section:
			$('.form-navigation .previous').toggleClass('show',index > 0);

			var atTheEnd = index >= $sections.length - 1;

			$('.form-navigation .next').toggleClass('show',!atTheEnd);
			$('.form-navigation [type=submit]').toggleClass('show',atTheEnd);

		}

		function curIndex() {
			// Return the current index by looking at which section has the class 'current'
			return $sections.index($sections.filter('.current'));
		}

		// Previous button is easy, just go back
		previous.click(function() {
			navigateTo(curIndex() - 1);
		});


	  	// Next button goes forward iff current block validates
		next.click(function() {
		    parsley.whenValidate({
		      group: 'block-' + curIndex()
		    }).done(function() {
		      navigateTo(curIndex() + 1);
		    });
		});


	  	// Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
		$sections.each(function(index, section) {
			var $section = $(section);

			$section.find(':input').attr('data-parsley-group', 'block-' + index);
			$section.hide();
		});

		navigateTo(0); // Start at the beginning


		// share IM contact
		var forceIM = false;

		function imInit(){
			forceIM = false;
			changeIM(forceIM);
		}

		// change IM on checkbox toggle
		imCheck.on('change', function(){
			forceIM = $(this).is(":checked");
			changeIM(forceIM);
		});


		function changeIM(forceIM){
	    	forceIM ? usernameBlock.addClass('active') : usernameBlock.removeClass('active'); 
	    	forceIM ? usernameSP.attr('required', true) : usernameSP.removeAttr('required');
		}



		// act to validation errors and success 
		parsley.on('form:error',function(){
			alert('Please check the errors and correct them!');  

		}).on('form:submit',function(e){

			console.log('Work Request Submitted');

			// we are not resetting the form as we are handling it all with wordpress

			// $startProjectForm[0].reset(); // reset the form


			// write code below  to submit to DB for hire form

			if(!window.isWordpress) return false;    

		});


		if (window.isWordpress) {  
			$startProjectForm.on('hf-success hf-error', function(e) {

				imInit(); // uncheck im, hide im and make it not required
				navigateTo(0); // Navigate back to start

				// check if fields have value to bring labels back
				formFields.each(function(i,el){
					checkFields(el);
				});

			});

		}

	}


	function contactForm(){
		// alert();
		var popup = contactPopup;
		var close = popup.find('.contact__close-form');
		var $contactForm  = popup.find('form');
		var emailField =  popup.find('#emailCF');

		disableSwipe(popup);

		//  swipe support for touch devices
		/*
		var targetElement = document.getElementById('viewport'),
		mc = new Hammer(targetElement);
		mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
		mc.on('swipeup swipedown', function(e) {

		console.log(e);

		});
		*/

		close.on('click',function(){
			popup.addClass('off');
		});


		// change validation messages and customize options

		$contactForm.parsley({
			requiredMessage: 'This field is required'
		});

		emailField.parsley({
			typeMessage: "Enter a valid e-mail address"
		});



		$contactForm.parsley().on('form:error',function(){

			alert('validation errors');  

		}).on('form:submit',function(e){
			console.log('Contact Form Submitted');
			return false;  
		  
		});

	}/* /contactForm */	



	formLabels();
	startProjectForm();
	contactForm();


});