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

  <!-- <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"> -->
  <link href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css" rel="stylesheet">
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
	<div class="background"></div>
    
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
			
			<!-- update navigation here and then inside outer-nav and array list in script.js  -->
			<nav class="l-side-nav">
			    <ul class="side-nav">
			      <li class="is-active" data-content="intro"><span>Home</span></li>
					<?php 
					if(0):
					?>
			      <li data-content="work"><span>Work</span></li>
					<?php 
					endif;
					?>
			      <li data-content="hire"><span>Hire Us</span></li>
			      <li data-content="info"><span>Info</span></li>
			      <li data-content="contact"><span>Contact</span></li>
			    </ul>
			</nav>
			<!-- /l-side-nav END -->

			<div id="contact__popup" class="contact__popup off">

				<div class="contact__form-container">

					<button class="contact__close-form">
						<span class="text">Close Form </span>
						<i class="ion-md-close"></i>
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
						
							<select name="subject" id="subjectCF">
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
					      <input class="form-field--normal" required id="nameCF" name="name" type="text" spellcheck="false" data-parsley-trigger="focusout input" >
					      <label for="name">Name</label>
					    </div>

					    <div class="information-email" >
					      <input class="form-field--normal" required id="emailCF" name="email" type="email" spellcheck="false" data-parsley-trigger="focusout" data-parsley-trigger-after-failure="input">
					      <label for="email">Email</label>
					    </div>
					  </div>

					  <div class="contact-form__details">

					    <div class="information-details" >
					      <textarea class="form-field--normal" required id="detailsCF" name="description" type="text" spellcheck="false" data-parsley-trigger="focusout input" >

					      </textarea>
					      <label for="details">Provide Details</label>
					    </div>
					  </div>

					  <button type="submit">
					  	Send Query <i class="icon ion-android-send"></i>
					  </button>

					  <p class="hf-message hf-message-success" role="alert">Thank you! We will be in touch soon.</p> 
					  
					</form>

				</div>
			</div>
			<!-- #contact__popup END -->

			<div id="work__popup" class="work__popup off">
				<div class="work__popup-wrapper">

					<div id="close-work-popup">
						X
					</div>
					<h2 class="work-heading">
						%heading%
					</h2>
					
					<div class="work-slider-container">
						<div class="work-slider">
							%slides%
						</div>
					</div>
					
					<ul class="work-attachments">
						<li class="work-attach demo-site">
							<i class="work-attach-icon demo-site-icon"></i>
							<a data-href="" href="#project-name" class="work-attach demo-site">
								Preview Live Demo
							</a>									
						</li>

						<li class="">
							<i class="work-attach-icon live-site-icon"></i>
							<a href="#project-name" class="work-attach live-site">
								Visit Live Site
							</a>
						</li>
						
						<li class="">
							<i class="work-attach-icon case-study-icon"></i>
							<a href="#project-name" class="work-attach case-study">
								View Case Study
							</a>
						</li>							
					</ul>

					<div class="work-brief">
						<p class="about">
							%about%
						</p>
						<ul class="highlights">
							%highlights%
						</ul>
					</div>
				</div>

			</div>