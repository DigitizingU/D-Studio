$document.ready(function($) {

	$(window).on('resize',function(){

		viewportDimensions();
		applyViewportHeights();
		loadDeferredImages();

	}); /* on resize ENDS */


	$(window).on('load',function(){

		window.hireWrapperHeight = hireWrapper.height();
			window.setInterval(function(){
			  // console.log(hireWrapperHeight);
		},3000);

		// check if fields have value on load (autofilled)
		formFields.each(function(i,el){
		    checkFields(el);
		});


		loadDeferredImages();

	});/* on load ENDS */


	// cta buttons
	$('.cta').click(function(){
		var $this = $(this);

		if ($this.hasClass('cta--contact')) {
			contactPopup.removeClass('off');
		}else if($this.hasClass('cta--about')){
			changeSlideTo('info'); // about section is 'info'
		}else if($this.hasClass('cta--hire')){
			changeSlideTo('hire'); // hire us section is 'hire'
		}
		
	});


	/* Event handlers for navigation */

	  // nav menu links click handler
	sideNavLi.add(outerNavLi).click(function(){

	    $this = $(this);
	    var dataContent = $this.attr("data-content");
	    var parent = $this.parent();

		if (!($this.hasClass('is-active')) && dataContent) {

			var $this = $(this),
			  curPos = parent.find('.is-active').attr('data-content'), // returns the data-content of the currently active li from side-nav/outer-nav
			  nextPos = dataContent;

			updateNavs(nextPos);
			updateContent(curPos, nextPos);

		}

	});


	// For unpredictable gestures such as swipe, scoll and key up/down which in turn uses updateHelper to convert it to what slide should come next

	// swipe support for touch devices
	var targetElement = viewport[0];
	var mc = new Hammer(targetElement);

	mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

	mc.on('swipeup swipedown', function(e) {
		updateHelper(e);
	});


    // DOMMouseScroll included for firefox support
	var canScroll = true,
		scrollController = null;


	window.$document.on('mousewheel DOMMouseScroll', function(e){

		if (!($('.outer-nav').hasClass('is-vis'))) {

			// e.preventDefault();

			var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

			if (delta > 50 && canScroll) {
				canScroll = false;
				clearTimeout(scrollController);
				scrollController = setTimeout(function(){
				  canScroll = true;
				}, 1000);
				updateHelper(1);

			} else if (delta < -50 && canScroll) {
				canScroll = false;
				clearTimeout(scrollController);
				scrollController = setTimeout(function(){
				  canScroll = true;
				}, 1000);
				updateHelper(-1);
			}

		}
  
	});


	window.$document.keyup(function(e){

		if (!($('.outer-nav').hasClass('is-vis'))) {
			e.preventDefault();
			updateHelper(e);
		}

	});

	
});