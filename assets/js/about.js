$document.ready(function($) {

	function aboutSlider() {

	    var aboutSlider = about.find('.slider');
	    var options = about.find('.about--options a');

	    var slidingSpeed = 1500;

	    /*
	    var outerSliderPrevBtn = outerSlider.siblings('.slider--prev');
	    var outerSliderNextBtn = outerSlider.siblings('.slider--next');
	    */

	    /* var innerSlider = work.find('.inner-slider');

	    var innerSliderPrevBtn = work.find('.inner-slider__nav--prev');
	    var innerSliderNextBtn = work.find('.inner-slider__nav--next');

	    var outerSliderControls = work.find('.outer-slider__controls');

	    var outerSliderPrevBtn = work.find('.outer-slider__nav--prev');
	    var outerSliderNextBtn = work.find('.outer-slider__nav--next');

	    */

	    // init swiper slider for outer slides
	    var swiper = new Swiper (aboutSlider, {
	      init: true,
	      loop: true,
	      loopedSlides: 4,
	      speed: slidingSpeed,
	      slidesPerView: 'auto',
	      centeredSlides: true,
	      normalizeSlideIndex: true,
	      direction: 'horizontal',
	      effect: 'fade',
	      normalizeSlideIndex: true,
	      fadeEffect: {
	        crossFade: true
	      },
	      controller:{
	        by: 'slide'
	      }
	      /*,
	      hashNavigation: true,
	      hashNavigation: {
	        watchState: true
	      }*/
	    });


	    options.on('click',function(){
	      var $this = $(this);
	      var slide = $this.data('slide');

	      swiper.slideTo(Number(slide), slidingSpeed);
	    });

	} // END of aboutSlider Func

	aboutSlider();
  
});