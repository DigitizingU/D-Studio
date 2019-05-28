<!DOCTYPE html>
<html lang="en">
<head>
  <title>DigitizingU</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Digitizing U Studio (Lite Version)">
  <meta name="keywords" content="">
  <meta name="author" content="Vimal Patra">
  <meta name="theme-color" content="#2b1726" />

  <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:300,400,400i,500,500i,700|Alegreya+Sans+SC:300,400,400i,500,500i,700,700i|Quicksand:400" rel="stylesheet">

  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="assets/css/main.css">

</head>
<body>

  <!-- notification for small viewports and landscape oriented smartphones -->
  
  <!-- <div class="browser-notification">
  	    <a class="device-notification--logo" href="#0">
  	      <img src="assets/img/logo.png" alt="Digitizing U Logo">
  	      <p>Digitizing U</p>
  	    </a>
  	    <p class="browser-notification--message">DigitizingU Studio is a modern web portal and thus we require you to switch to a newer version of a modern day browser from the given links below.  Be Assured you won't be disappointed.</p>
  </div> -->

  <!-- <div class="device-notification">
  	    <a class="device-notification--logo" href="#0">
  	      <img src="assets/img/logo.png" alt="Digitizing U Logo">
  	      <p>Digitizing U</p>
  	    </a>
  	    <p class="device-notification--message">DigitizingU Studio has so much to offer that we must request you orient your device to portrait or find a larger screen. Be Assured you won't be disappointed.</p>
  	    <p class="browser-notification--message">DigitizingU Studio is a modern web portal and thus we require you to switch to a newer version of a modern day browser from the given links below.  Be Assured you won't be disappointed.</p>
  </div>
   -->
  <div class="perspective effect-rotate-left">
    
    <?php
		require_once('navigation.php');
	?>

    <div class="container">
    	
    	<div class="outer-nav--return"></div>
      	
      	<div id="viewport" class="l-viewport">
        
        <div class="l-wrapper">
			
			<?php
				require_once('masthead.php');
			?>

			<nav class="l-side-nav">
			    <ul class="side-nav">
			      <li class="is-active"><span>Home</span></li>
			      <li><span>Work</span></li>
			      <li><span>Hire Us</span></li>
			      <li><span>Info</span></li>
			      <li><span>Contact</span></li>
			    </ul>
			</nav>
			<!-- /l-side-nav END -->

			<div id="contact__popup" class="contact__popup off">

				<div class="contact__form-container">

					<button id="close-contact-form" class="contact__close-form">
						<span class="text">Close Form </span>
						<i class="ion-close"></i>
					</button>

					<h2 class="contact__form-title section__title">
						Fill the form below
					  <!-- <span class="sub">select what you want us to work on</span> -->
					</h2>

					<!-- checkout formspree.io for easy form setup -->
					<form id="contactForm" class="contact-form">
					  
						<div class="contact-form__subject no-absolute-label">
							<label for="">
								Subject for contact
							</label>
						
							<select name="subjectCF" id="subjectCF">
								<option value="">
									project enquiry
								</option>
								<option value="">
									business enquiry
								</option>
								<option value="">
									join us
								</option>
								<option value="">
									other
								</option>
							</select>

						</div>

					  <div class="contact-form__information">

					    <div class="information-name" >
					      <input class="form-field--normal" required id="nameCF" type="text" spellcheck="false" data-parsley-trigger="focusout input" >
					      <label for="name">Name</label>
					    </div>

					    <div class="information-email" >
					      <input class="form-field--normal" required id="emailCF" type="email" spellcheck="false" data-parsley-trigger="focusout" data-parsley-trigger-after-failure="input">
					      <label for="email">Email</label>
					    </div>
					  </div>

					  <div class="contact-form__details">

					    <div class="information-details" >
					      <textarea class="form-field--normal" required id="detailsCF" type="text" spellcheck="false" data-parsley-trigger="focusout input" >

					      </textarea>
					      <label for="details">Provide Details</label>
					    </div>
					  </div>

					  <button type="submit">
					  	Send Query <i class="icon ion-android-send"></i>
					  </button>
					</form>

				</div>

			</div>
			<!-- #contact__popup END -->