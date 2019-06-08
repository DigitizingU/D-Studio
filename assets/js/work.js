$document.ready(function($) {

	var activateWork = work.find(".activate-work");

	activateWork.click(function(){
		workPopup.removeClass('off');
	});



	function workSlider() {

	    var activeInnerSlider;
	    // var outerSlider = work.find('.outer-slider');
	    var innerSlider = work.find('.inner-slider');
	    var innerSliderPrevBtn = work.find('.inner-slider__nav--prev');
	    var innerSliderNextBtn = work.find('.inner-slider__nav--next');

	    var sliderFilters = work.find('.slider-filters');
	    var sliderFiltersPrevBtn = work.find('.slider-filters__nav--prev');
	    var sliderFiltersNextBtn = work.find('.slider-filters__nav--next');
	    

	    /*

	    // init swiper slider for outer slides
	    var outerSwiper = new Swiper (outerSlider, {
			init: false,
			loop: true,
			loopedSlides: 4,
			slidesPerView: 'auto',
			centeredSlides: true,
			normalizeSlideIndex: true,
			direction: 'vertical',
			allowTouchMove: false,
			effect: 'slide',
			normalizeSlideIndex: true,
			controller:{
				by: 'slide'
			}
	    });


	    // determining current inner swiper index
	    var currentInnerSwiperIndex;
	    outerSwiper.on('init',function () {
	      console.log('swiper initialized');
	      currentInnerSwiperIndex = outerSwiper.activeIndex;
	      console.log('currentInnerSwiperIndex: '+ currentInnerSwiperIndex);
	    });

	    outerSwiper.init(); // init outerSwiper
	    */


	    var sliderFiltersSwiper = new Swiper(sliderFilters, {
	      effect: 'slide',
	      normalizeSlideIndex: true,
	      direction: 'horizontal',
	      centeredSlides: true,
	      loop: true,
	      loopedSlides: 4,
	      slidesPerView: 'auto',
	      spaceBetween: 35,
	      touchRatio: 0.2,
	      slideToClickedSlide: true,
	      normalizeSlideIndex: true,
	      navigation: {
	        nextEl: sliderFiltersNextBtn,
	        prevEl: sliderFiltersPrevBtn
	      },
	      controller:{
	        by: 'slide'
	      },
	      breakpoints:{
	        600:{
	          slidesPerView: 'auto',
	          spaceBetween: 20

	        }
	      }

	    });


	    // outerSwiperControls.controller.control = outerSwiper;
	    // outerSwiper.controller.control = outerSwiperControls;


	    // init swiper slider for inner slides
	    var innerSwiper = new Swiper (innerSlider, {
	      
			direction: 'horizontal',
			loop: true,
			spaceBetween: 0,
			// slidesPerView: 3,
			slidesPerView: 'auto',
			loopedSlides: 10,
			loopAdditionalSlides: 10,
			centeredSlides: true,
			spaceBetween: 0,
			effect: 'coverflow',
			// grabCursor: true,
			coverflowEffect: {
				rotate: 40,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows : true
			},
			navigation: {
				nextEl: innerSliderNextBtn,
				prevEl: innerSliderPrevBtn
			},
			normalizeSlideIndex: true,
			slideToClickedSlide: true

	    });




	    // swiping current innerSwiper on clicks
	    
	    var speed = 400;
	    var touch;

	    innerSliderNextBtn.add(innerSliderPrevBtn).on('click touchstart',function(e){
	      var $this = $(this);
	      
	      if (e.type=='touchstart') {
	        touch = true;

	        setTimeout(function(){
	          touch = false;
	        },400);
	      }

	      // return if click fired within 400 ms after touch
	      if (touch && e.type=='click') {
	        return;
	      }

	      var curInnerSwiperCont = outerSwiper.slides[currentInnerSwiperIndex];
	      var curInnerSwiper = $(curInnerSwiperCont).find('.inner-slider')[0];
	      var curSwiperInstance = curInnerSwiper.swiper;

	      if ($this.hasClass('inner-slider__prev')) {
	          curInnerSwiper.swiper.slidePrev(400);
	      }else{
	          curInnerSwiper.swiper.slideNext(400);
	      }

	    });

	   
	    /*

	    // detecting outerSwiper transitionEnd to change currentInnerSwiperIndex
	    var outerSwiperTrigger , immFireTimeout = 200;
	    outerSwiper.on('transitionEnd',function(){
	      // stopping it to execute multiple times consecutively
	      if (outerSwiperTrigger) {
	        return;
	      }else{
	        outerSwiperTrigger = true;
	      }

	      console.log('changed');

	      currentInnerSwiperIndex = outerSwiper.activeIndex;
	      console.log('currentInnerSwiperIndex: '+ currentInnerSwiperIndex);


	      window.setTimeout(function(){
	        outerSwiperTrigger = undefined;
	      },immFireTimeout); // allowing the callback to run after a certain time
	    });


	    */
	} // END of workSlider Func



	function workShowcase(){
		// start work slider
		workSlider();
		var popup = contactPopup;
		var close = popup.find('#close-work-popup');

		disableSwipe(popup);   

	}


	workShowcase();
	

});