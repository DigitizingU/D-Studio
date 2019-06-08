<?php
	require_once('header.php');
?>

	        <ul class="l-main-content main-content">

	            <li data-content="intro" class="l-section section section--hero section--is-active">

	              <div class="section__wrapper">

	                <div class="video-container">
	                    <video id="hero-video" loop autoplay muted poster="assets/img/hero/poster-min.jpg">
	                      <source src="assets/videos/hero/hd0926.mp4" type="video/mp4">
	                      <source src="assets/videos/hero/hd0926.ogg" type="video/ogg">
	                      <source src="assets/videos/hero/hd0926.webm" type="video/webm">
	                      Your browser does not support the video tag.
	                    </video>

	                    <script>
						    document.getElementById('hero-video').play();
						</script>

	                    <div class="mask mask-1"></div>
	                    <div class="mask mask-2"></div>
	                    <div class="mask mask-3"></div>

	                </div>

	                <div class="intro">
						<div class="intro--banner">
							<h1>
							    Design pixel perfect,<br> beautiful & fast websites
							</h1>

						</div>

		                <!-- =cta-container  -->
		                <div class="cta-container">
		                	<button class="cta cta--contact">get in touch
								
		                      	<span class="btn-background btn-background--dull"></span>
		                    </button>

		                    <button class="cta cta--hire">Hire Us
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
								  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
								    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
								  </g>
								</svg>
		                      	<span class="btn-background btn-background--highlight"></span>
		                    </button>
		            		<a class="cta cta--about muted-link" href="#">
		            			<span class="text">
		            				know more
		            			</span>
		            		</a>
		                </div> <!-- /cta-container ENDS  -->               				
	                </div><!-- /intro--banner ENDS -->
	                
	              </div> <!-- /intro ENDS -->
	            </li>
	            <!-- /section--hero -->
				
				<?php 
					if(0):
				 ?>
	            <li data-content="work" class="l-section section section--work section--next">
	              <div class="work">
	              	<div class="bg-image"></div>
	                <h2 class="section__title">
	                	<div>
	                		<span class="word">our</span>
		                	<span class="word">work</span>
	                	</div>
	                </h2>

	                <div class="work__lockup">

	                	<!-- If we need navigation buttons -->
					    <div class="slider-filters__nav slider-filters__nav--prev">
					    	<span class="icon icon--prev">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
					                <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
					                  <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
					                  c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
					                  c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
					                </g>
					            </svg>

							</span>
					    </div>

					    <div class="slider-filters__nav slider-filters__nav--next">
					    	<span class="icon icon--next">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
									  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
									    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
									  </g>
								</svg>
									
							</span>
					    </div>
	                  
						<div class="slider-filters swiper-container">

							<div class="wrapper swiper-wrapper">
							  
							  	<a href="#all-websites" class="slider-filters__btn swiper-slide">
						  			<span class="text">
						  				All websites
						  			</span>
								</a>

								<a href="#business-website" class="slider-filters__btn swiper-slide">
						  			<span class="text">
						  				Business website
						  			</span>
								</a>

								<a href="#e-commerce-website" class="slider-filters__btn swiper-slide">
						  			
						  			<span class="text">
						  				E-Commerce website
						  			</span>
								</a>

								<a href="#media-website" class="slider-filters__btn swiper-slide">
						  			
						  			<span class="text">
						  				Media website
						  			</span>
								</a>

								<a href="#infopreneur-website" class="slider-filters__btn swiper-slide">
						  			
						  			<span class="text">
						  				Infopreneur website
						  			</span>						  			
								</a>

							</div>

							
						</div>

						<div class="inner-slider swiper-container">
							<ul class="inner-slider__wrapper swiper-wrapper">
								
								<li class="inner-slider__item swiper-slide">
								    <a class="activate-work" href="#work/website-1" data-hash="ui-ux-1">
								      <figure class="inner-slider__item-content">

								          <div class="inner-slider__item-image-container">
								            <img class="inner-slider__item-image" src="assets/img/ui-ux (1).jpg" alt="Victory">
								          </div>

								          <figcaption>
								              <p class="inner-slider__item-title">Victory</p>
								              <p class="inner-slider__item-description">
								                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
								              </p>
								          </figcaption>

								      </figure>
								    </a>
								</li>

								<li class="inner-slider__item swiper-slide">
								    <a class="activate-work" href="#work/website-2" data-hash="ui-ux-2">

								      <figure class="inner-slider__item-content">

								          <div class="inner-slider__item-image-container">
								              <img class="inner-slider__item-image" src="assets/img/ui-ux (2).jpg" alt="Victory">
								          </div>

								          <figcaption>
								              <p class="inner-slider__item-title">Army</p>
								              <p class="inner-slider__item-description">
								                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
								              </p>
								          </figcaption>
								    
								      </figure>
								    </a>
								</li>

								<li class="inner-slider__item swiper-slide">
								    <a class="activate-work" href="#work/website-3" data-hash="ui-ux-3">
								      <figure class="inner-slider__item-content">

								        <div class="inner-slider__item-image-container">
								          <img class="inner-slider__item-image" src="assets/img/ui-ux (1).png" alt="Victory">
								        </div>

								        <figcaption>
								          <p class="inner-slider__item-title">Love</p>
								          <p class="inner-slider__item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
								        </figcaption>

								      </figure>
								      
								    </a>
								</li>

							</ul>

						</div>

						<!-- /inner-slider -->
						         
						<div class="inner-slider__nav inner-slider__nav--prev">
						    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						    viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
						        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
						          <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
						          c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
						          c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
						        </g>
						    </svg>
						</div>

						<div class="inner-slider__nav inner-slider__nav--next">
						    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
						    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
						      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
						    </g>
						    </svg>
						</div>

						
	                  
	                </div>

	              </div>
	            </li>
	            <!-- /section--work -->
				<?php 
					endif;
				 ?>
	                <!-- section-hire | START A PROJECT -->
	            <li data-content="hire" class="l-section section section--hire">
	              
					<div class="bg-img image-defer defer-bg-img"	

						data-full-bg="true"
						data-src="url('assets/img/hire-wide-600-min.jpg')"
						data-bg-img-styles="background-position: 50% 50%; background-size: cover;"

						data-src-600="url('assets/img/hire-wide-900-min.jpg')"
						data-bg-img-styles-600="background-position: 50% 50%; background-size: cover;"
						
						data-src-900="url('assets/img/hire-wide-1200-min.jpg')"
						data-bg-img-styles-900="background-position: 50% 50%; background-size: cover;"
						
						data-src-1600="url('assets/img/hire-wide-min.jpg')"
						data-bg-img-styles-1600="background-position: 50% 50%; background-size: cover;"
					></div>

		            <div class="bg-1 image-defer defer-bg-img"
						
						data-full-bg="true"

						data-src="url('assets/img/effect-1-600-min.jpg')"
						data-bg-img-styles="background-position: 50% 50%; background-size: cover;"

						data-src-600="url('assets/img/effect-1-900-min.jpg')"
						data-bg-img-styles-600="background-position: 50% 50%; background-size: cover;"
						
						data-src-900="url('assets/img/effect-1-1200-min.jpg')"
						data-bg-img-styles-900="background-position: 50% 50%; background-size: cover;"
						
						data-src-1600="url('assets/img/effect-1-min.jpg')"
						data-bg-img-styles-1600="background-position: 50% 50%; background-size: cover;"
		            ></div>
		              

					<div class="bg-2"
					></div>

		            <div class="hire">

		                <div class="hire__wrapper">
		            		<h2 class="section__title">
			                  <div>
			                  	Hire Us
			                  </div>
			                  <!-- <span class="sub">select what you want us to work on</span> -->
			                </h2>

			                <!-- checkout formspree.io for easy form setup -->
			                <form class="work-request" >
								
								<div class="form-section">

				                  	<div class="work-request--information">
					                    
					                    <div class="information-type" >
					                      
					                      <select required id="typeSP" name="website type" type="text" spellcheck="false" data-parsley-trigger="focusout input" >
					                      	
					                      	<option value="">Type of website</option>
					                      	<option value="unsure">Not Sure</option>
					                      	<option value="business">Business website</option>
					                      	<option value="ecommerce">E-commerce website</option>
					                      	<option value="media">Media website</option>
					                      	<option value="portfolio">Portfolio website</option>

					                      </select>

					                    </div>

					                    <div class="information-budget" >
					                      <input required id="budgetSP" name="budget" type="number" spellcheck="false" min="100" data-parsley-trigger="focusout" data-parsley-trigger-after-failure="input">
					                      <label for="budgetSP">Budget in USD (1$ = 70INR)</label>
					                    
					                    </div>

					                    <div class="information-business" >
					                      <input id="businessSP" name="business name" type="text" spellcheck="false" data-parsley-trigger="focusout" data-parsley-trigger-after-failure="input">
					                      <label for="businessSP">(Not Required) Business Name</label>
					                    </div>

					                    <div class="information-hosting" >

											<input id="hostingSP" name="hosting" type="checkbox" spellcheck="false" data-parsley-trigger="focusout" data-parsley-trigger-after-failure="input">

											<label class="checkbox-label" for="hostingSP">

												<span class="check">
													<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
													    <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
													      <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
													    </g>
												    </svg>
												</span>

												<span class="text">
													I need web hosting as well (Click This Label To Check)
												</span>
											
											</label>
					                    </div>

				                  	</div>

								</div>

			                  	<div class="form-section">
									<p class="services-label">
										Select addons you want with the website
									</p>

									<div class="work-request--services">

										<span class="services-a">
										  	<input id="service-maintenance" type="checkbox" value="maintenance"  name="services[]">

										  	<label for="service-maintenance">
											    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											    viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
												    <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
												      <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
												    </g>
											    </svg>
											    
											    <span class="other">
											    	Maintenance
											    </span>
											    <span class="mobile">
											    	Maintenance
											    </span>
										  	</label>

										  	<input id="service-email-marketing"  type="checkbox" value="email-marketing" name="services[]">
										  	
										  	<label for="service-email-marketing">
											    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											    viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
												    <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
												      <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
												    </g>
											    </svg>
											    <span class="mobile">
											    	Email Marketing
											    </span>
											    <span class="other">
											    	Email Marketing
											    </span>
										  	</label>
										</span>

										<span class="services-b">

										  	<input id="service-social-marketing" type="checkbox" value="social-marketing" name="services[]">

										 	<label for="service-social-marketing">
											    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											    viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
												    <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
												      <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
												    </g>
											    </svg>

											    <span class="mobile">
											    	Social Marketing
											    </span>
											    <span class="other">
											    	Social Marketing
											    </span>
										  	</label>
										</span>

										<span class="services-c">
										  	<input id="service-logo-branding" type="checkbox" value="logo-branding" name="services[]" >
										  	
										  	<label for="service-logo-branding">
										    	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
												    <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
												      <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
												    </g>
										    	</svg>

											    <span class="other">
											    	Logo / Branding
											    </span>
											    <span class="mobile">
											    	Logo / Branding
											    </span>
										  	</label>

										  	<input id="service-google-adwords" type="checkbox" value="digital marketing" name="services[]">
										  	<label for="service-google-adwords">
											    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											    viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
												    <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
												      <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
												    </g>
											    </svg>

											    <span class="other">
											    	Google Adwords
											    </span>
											    <span class="mobile">
											    	Google Adwords
											    </span>
										  	</label>								  	
										</span>
									</div>

								</div>
								<!-- /form-section  -->
								

								<div class="form-section">

				                  	<div class="work-request--information">
					                    <div class="information-name" >
					                      <input required id="nameSP" name="name" type="text" spellcheck="false" data-parsley-trigger="focusout input" >
					                      <label for="nameSP">Name</label>
					                    </div>

					                    <div class="information-email">
					                      <input required id="emailSP" name="email" type="email" spellcheck="false" data-parsley-trigger="focusout" data-parsley-trigger-after-failure="input">
					                      <label for="emailSP">Email</label>
					                    </div>
				                  	</div>

				                  	<div class="work-request--information">
					                    
					                    <div class="information-im">
											<input id="imSP" name="im" value="im_provided" type="checkbox" spellcheck="false" data-parsley-trigger="focusout" data-parsley-trigger-after-failure="input">

											<label class="checkbox-label" for="imSP">

												<span class="check">
													<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
													    <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
													      <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
													    </g>
												    </svg>
												</span>

												<span class="text">
													I can connect on whatsapp / telegram
												</span>
											
											</label>
					                    </div>

					                    <div class="information-username" parsely-group="username">
					                      <input id="usernameSP" list="username-list" name="im username" type="text" spellcheck="false" data-parsley-trigger="focusout input" >
					                      <label for="usernameSP">App Name & Number/Username</label>

											<datalist id="username-list">
											  <option value="Whatsapp: +91 9999999999">
											  <option value="Telegram: Username">
											  <option value="Skype: Username">
											  <option value="Twitter: Username">
											  <option value="Instagram: Username">
											</datalist>

					                    </div>

				                  	</div>

								</div>
								<!-- /form-section  -->

								<div class="form-navigation">
								    <button type="button" class="previous">
								    	<i class="icon ion ion-md-arrow-back"></i> Back
								    </button>
								    <button type="button" class="next">
								    	Go <i class="icon ion ion-md-arrow-forward"></i>
								    </button>

								    <div class="submit-block">
								    	<button type="submit">
											Send Request
										</button>
								    </div>

								</div>	
								<!-- /form-navigation  -->	

								<p class="hf-message hf-message-success" role="alert">Thank you! We will be in touch soon.</p>                  	


			                </form>

		                </div><!--  hire__wrapper ENDS   -->

		            </div>

	            </li>
	            <!-- /section--hire -->

	            <li data-content="info" class="l-section section section--about">
	            	<div class="bg-2"></div>
	            	<div class="bg-1"></div>
	            	<div class="bg-img"></div>
					
					<div class="about">

					    <div class="about--banner">

							<div class="slider swiper-container">
								<div class="slider__wrapper swiper-wrapper">

									<div class="slider__slide swiper-slide swiper-slide-1">
										<div class="slide-content">
											
											<h2>
												Why Us?
											</h2>
											<div class="image image-defer defer-bg-img"
											
											data-placeholder="assets/img/placeholder.jpg"
											
											data-placeholder-bg-img-styles="background-size: cover; background-position: 50% 50%;"
											
											data-src="assets/gif/designs/1-200-min.gif"
											 data-bg-img-styles="background-size: 225px 168px;"
											
											 data-src-600="assets/gif/designs/1-300-min.gif"
											 data-bg-img-styles-600="background-size: 291px 216px;"
											
											 data-src-900="assets/gif/designs/1-500-min.gif"
											 data-bg-img-styles-900="background-size: 372px 275px;"
											
											 data-src-1600="assets/gif/designs/1-min.gif"
											 data-bg-img-styles-1600="background-size: 472px 350px;"
											
											 >
												
											</div>
											<h3>
												Websites with great <br>user experience,
											</h3>

											
										</div>

										<div class="extra-content">
											<ul>
												<li>
													<span class="arrow icon ion ion-md-arrow-forward"></span>
													Functional Design
													<i class="info icon ion ion-ios-information-circle-outline"></i>
												</li>
												
												<li>
													<span class="arrow icon ion ion-md-arrow-forward"></span>
													Loads Super Fast
													<i class="info icon ion ion-ios-information-circle-outline"></i>
												</li>

												<li>
													<span class="arrow icon ion ion-md-arrow-forward"></span>
													SEO Ready
													<i class="info icon ion ion-ios-information-circle-outline"></i>
												</li>
												
												<li>
													<span class="arrow icon ion ion-md-arrow-forward"></span>
													Responsive & Mobile First
													<i class="info icon ion ion-ios-information-circle-outline"></i>
												</li>
											</ul>
										</div>
										

										<!-- <a href="#0">Career
											<span>
											  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
											  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
											    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
											  </g>
											  </svg>
											</span>
										</a> -->

									</div>

									<div class="slider__slide swiper-slide swiper-slide-2">
										<div class="slide-content">

											<h2>
												Our Vision.
											</h2>

											<div class="image image-defer defer-bg-img"
											
											data-placeholder="assets/img/placeholder.jpg"
											
											data-placeholder-bg-img-styles="background-size: cover; background-position: 50% 50%;"
											
											data-src="assets/gif/designs/special/14-200-min.gif"
											 data-bg-img-styles="background-size: 225px 168px;"
											
											 data-src-600="assets/gif/designs/special/14-300-min.gif"
											 data-bg-img-styles-600="background-size: 291px 216px;"
											
											 data-src-900="assets/gif/designs/special/14-500-min.gif"
											 data-bg-img-styles-900="background-size: 372px 275px;"
											
											 data-src-1600="assets/gif/designs/special/14-min.gif"
											 data-bg-img-styles-1600="background-size: 472px 350px;"
											
											 ></div>

											<h3>
												We want to <br>elevate 
												
												the web design 
												<br>
												standards for everyone.
											</h3>

											
											<!-- <a href="#0">Career
												<span>
												  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
												  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
												    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
												  </g>
												  </svg>
												</span>
											</a> -->

											
										</div>

										<div class="extra-content">
											<p>

												Design & technology has progressed with the speed of light over the past few years. But even now, The bar is set too low by design professionals and even agencies for web UI/UX design.
												<br>
												<br>
												For people entering the online world, who want to build a presence online,
												<br>
												We design & build a great website from a UI/UX or Brand Value / Marketing Standpoint. 
											</p>

										</div>
											
									</div>

									<!-- <div class="slider__slide swiper-slide swiper-slide-3">
										<div class="slide-content">
											<h2>
												What's Coming
											</h2>
									
											<h3>
												We are building the future of digital services 
											</h3>
									
											<p>
												
											</p>
									
											<a href="#0">Career
												<span>
												  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
												  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
												    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
												  </g>
												  </svg>
												</span>
											</a>
									
										</div>
									
										<div class="video-container">
											<video loop autoplay>
															                      	<source src="assets/videos/about/a8.mp4" type="video/mp4">
															                     
															                      	Your browser does not support the video tag.
															                    </video>
										</div>
									
									</div> -->

								</div>

							</div>

					    </div>

					    <div class="about--options">

							<a href="#why" data-slide="0">
								<h3>Why</h3>
								<span class="icon">
									<i class="ion ion-md-help"></i>
								</span>
							</a>

							<a href="#vision" data-slide="1">
								<h3>Vision</h3>
								<span class="icon">
									<i class="ion ion-md-eye"></i>
								</span>
							</a>

							<!-- <a href="#future" data-slide="2">
								<h3>Future</h3>
							</a> -->

					    </div>

					</div>
	            </li>
	            <!-- /section--about -->

	            <li data-content="contact" class="l-section section section--contact section--prev">
		            <div class="bg-2"></div>
		            <div class="bg-1"></div>
	              	<div class="bg-img image-defer defer-bg-img"
	              		
	              		data-src="assets/img/phone-map.jfif"
	              		data-bg-img-styles="background-size: cover; background-position: 50% 50%"

	              		data-src-1200="assets/img/map.jfif"
						data-bg-img-styles-1200=" background-size: cover; background-position: 50% 50%"

	              	></div>

	            	<div class="contact">
		                <div class="contact--lockup">

							<div class="modal">
							    <div class="modal--information">
							      <ul>
								      	<li class="meet">
								      		<span class="icon ion-ios-people">
								      			
								      		</span>
								      		<div class="text">
								      			<span class="name">
									      			Meet Us:
									      		</span>
									      		<span class="detail">
									      			New Delhi, India
									      		</span>
								      		</div>

								      	</li>
								      	<li>
								      		<span class="icon ion-ios-call">
								      			
								      		</span>
								      		<div class="text">
								      			<span class="name">
									      			Phone:
									      		</span>
									      		<span class="detail">
									      			<span class="main">
									      				<span class="numbers">+91 9999 695369</span> (IN)
									  				</span>
									  				
									      			<span class="caption">11 am - 4 pm (IST)</span>

									      		</span>
								      		</div>
								      	</li>

								      	<li>
								      		<span class="icon ion-logo-whatsapp">
								      			
								      		</span>
								      		<div class="text">
								      			<span class="name">
									      			Whatsapp:
									      		</span>
									      		<span class="detail">
									      			<span class="main">
									      				<a target="_blank" href="https://wa.me/919999695369?text=Hi%2C%20I%20come%20here%20from%20studio.digitizingu.com!%0A%0AI%20have%20a%20query%20about%2C">
									      					<span class="numbers">+91 9999 695369</span> (IN)
									      				</a>
									      				
									      			</span>
									      			
									      			<span class="caption">Response in 24 hrs</span>
									      		</span>
								      		</div>
								      	</li>

								      	<li>
								      		<span class="icon ion-ios-mail">
								      			
								      		</span>
								      		<div class="text">
								      			<span class="name">
									      			E-Mail:
									      		</span>
									      		<span class="detail">
									      			<span class="main">
									      				<a target="_blank" href="mailto:studio@digitizingu.com">studio@digitizingu.com</a>
									      			</span>
									      			
									      			<span class="caption">Response in 48 hrs</span>
									      		</span>
								      		</div>
								      	</li>

							      </ul>
							      <!-- <img 
							      	data-load-offset="10000"
							      	src="assets/img/placeholder.jpg"
							      	data-src="assets/gif/designs/1.gif"
							      	width="200" 
							      	alt=""
							      	class="image-defer defer-img" 
							      > -->
							      <button class="cta cta--contact">
							      	Get In Touch
							      </button>
							    </div>		                    
							</div>
							<!-- /modal -->

						

<?php
	require_once('footer.php');
?>