// @codekit-prepend "/vendor/hammer-2.0.8.js";

$( document ).ready(function() {

  var $document = this;

  /*setInterval(function(){
    alert("$(document).clientHeight: " + document.documentElement.clientHeight);
    alert("$(document).innerHeight: " + $(document).innerHeight());
  },5000);*/

  function viewportDimensions(){

    window.vh = $document.documentElement.clientHeight;
    window.vw = $document.documentElement.clientWidth;
    window.vmin = vh > vw ? vw : vh;
    window.vmax = vh < vw ? vw : vh;

  }

  viewportDimensions();






  updateToLastPos(); // update to the last known section

  var body = $('body');
  var work = body.find('.work');
  var hire = body.find('.hire');
  var about = body.find('.about');
  var contact = body.find('.contact');
  var formFields = body.find('input, textarea');

  // nav menu links click handler
  $('.side-nav li, .outer-nav li').click(function(){

    if (!($(this).hasClass('is-active'))) {

      var $this = $(this),
          curActive = $this.parent().find('.is-active'),
          curPos = $this.parent().children().index(curActive),
          nextPos = $this.parent().children().index($this),
          lastItem = $(this).parent().children().length - 1;

      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);

    }
  });

  // cta buttons
  $('.cta').click(function(){
    var $this = $(this);

    if ($this.hasClass('cta--contact')) {
      var contactPopup = $('#contact__popup');

      contactPopup.removeClass('off');

    }else if($this.hasClass('cta--about')){
      changeSlideTo(2); // about section is on index - 2
    }else if($this.hasClass('cta--hire')){
      changeSlideTo(4); // hire us section is on index - 4
    }

  });


  /* START - functions for navigating through slides */

  // DOMMouseScroll included for firefox support
  var canScroll = true,
      scrollController = null;

  $(this).on('mousewheel DOMMouseScroll', function(e){

    if (!($('.outer-nav').hasClass('is-vis'))) {

      e.preventDefault();

      var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

      if (delta > 50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 1000);
        updateHelper(1);
      }
      else if (delta < -50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 1000);
        updateHelper(-1);
      }

    }
  });
  


  // swipe support for touch devices
  var targetElement = document.getElementById('viewport'),
      mc = new Hammer(targetElement);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  mc.on('swipeup swipedown', function(e) {

    updateHelper(e);

  });

  $(document).keyup(function(e){

    if (!($('.outer-nav').hasClass('is-vis'))) {
      e.preventDefault();
      updateHelper(e);
    }

  });

  function updateToLastPos(){
    
    var lastKnownPos = sessionStorage.getItem('activeSectionClass');
    
    if (!(+lastKnownPos)) return;
    var curPos = 0,
        lastItem = $('.side-nav').children().length - 1,
        nextPos = lastKnownPos;

      /*if (curPos == 0){
        nextPos = curPos - 1;*/
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      /*}
      else if (curPos !== lastItem) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }*/
       
  }

  // determine scroll, swipe, and arrow key direction
  function updateHelper(param) {

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = 0;

    if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
      if (curPos !== lastItem) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }
    else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
      if (curPos !== 0){
        nextPos = curPos - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
      else {
        nextPos = lastItem;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }

  }



  // sync side and outer navigations
  function updateNavs(nextPos) {

    $('.side-nav, .outer-nav').children().removeClass('is-active');
    $('.side-nav').children().eq(nextPos).addClass('is-active');
    $('.outer-nav').children().eq(nextPos).addClass('is-active');

  }


  // update main content area
  function updateContent(curPos, nextPos, lastItem) {

    // save the next active section for the session to restore on reload
    sessionStorage.setItem('activeSectionClass',nextPos); 

    $('.main-content').children().removeClass('section--is-active');
    $('.main-content').children().eq(nextPos).addClass('section--is-active');
    $('.main-content .section').children().removeClass('section--next section--prev');

    if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
      $('.main-content .section').children().removeClass('section--next section--prev');
    }
    else if (curPos < nextPos) {
      $('.main-content').children().eq(curPos).children().addClass('section--next');
    }
    else {
      $('.main-content').children().eq(curPos).children().addClass('section--prev');
    }

    if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header--cta').addClass('is-active');
    }
    else {
      $('.header--cta').removeClass('is-active');
    }

  }


  function outerNav() {

    /* Opens the navigation menu */
    $('.header--nav-toggle').click(function(){

      $('.perspective').addClass('perspective--modalview');
      setTimeout(function(){
        $('.perspective').addClass('effect-rotate-left--animate');
      }, 25);
      $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');

    });

    /* Closes the navigation menu on click of an item*/    
    $('.outer-nav--return, .outer-nav li').click(function(){

      $('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function(){
        $('.perspective').removeClass('perspective--modalview');
      }, 400);
      $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

    });

  }

  function changeSlideTo(updateTo){

      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 1,
          nextPos = updateTo;

      /*console.log('curActive: ' + curActive);
      console.log('curPos: '+curPos);
      console.log('lastItem: '+lastItem);
      console.log('nextPos: '+nextPos);*/
      updateNavs(updateTo);
      updateContent(curPos, nextPos, lastItem);

  }


  /* END -  functions for navigating through slides */


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




  function workSlider() {
    var activeInnerSlider;

    var outerSlider = work.find('.outer-slider');
      /*var outerSliderPrevBtn = outerSlider.siblings('.slider--prev');
      var outerSliderNextBtn = outerSlider.siblings('.slider--next');
      */
    var innerSlider = work.find('.inner-slider');

    var innerSliderPrevBtn = work.find('.inner-slider__nav--prev');
    var innerSliderNextBtn = work.find('.inner-slider__nav--next');

    var outerSliderControls = work.find('.outer-slider__controls');

    var outerSliderPrevBtn = work.find('.outer-slider__nav--prev');
    var outerSliderNextBtn = work.find('.outer-slider__nav--next');

    

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
      /*fadeEffect: {
        crossFade: true
      },*/
      controller:{
        by: 'slide'
      }
      /*,
      hashNavigation: true,
      hashNavigation: {
        watchState: true
      }*/
    });


    // determining current inner swiper index
    var currentInnerSwiperIndex;
    outerSwiper.on('init',function () {
      console.log('swiper initialized');
      currentInnerSwiperIndex = outerSwiper.activeIndex;
      console.log('currentInnerSwiperIndex: '+ currentInnerSwiperIndex);
    }),

    outerSwiper.init(); // init outerSwiper

    var outerSwiperControls = new Swiper(outerSliderControls, {
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
        nextEl: outerSliderNextBtn,
        prevEl: outerSliderPrevBtn
      },
      controller:{
        by: 'slide'
      },
      breakpoints:{
        700:{
          slidesPerView: 'auto',
          spaceBetween: 0

        }

      }

    });


    outerSwiperControls.controller.control = outerSwiper;
    outerSwiper.controller.control = outerSwiperControls;


    // init swiper slider for outer slides
    var innerSwiper = new Swiper (innerSlider, {
      
      direction: 'horizontal',
      loop: true,
      spaceBetween: 0,
      // slidesPerView: 3,
      slidesPerView: 'auto',
      loopedSlides: 7,
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

    })

    





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

  } // END of workSlider Func

  

  function transitionLabels() {

    formFields.focusout(function(){

      var textVal = $(this).val();

      if (textVal === "") {
        $(this).removeClass('has-value');
      }
      else {
        $(this).addClass('has-value');
      }

      // correct mobile device window position
      window.scrollTo(0, 0);

    });

  }


  function smallScreenOptimizerForForms(){

      formFields.on('focusin',function(){
        console.log('focusin');
        body.addClass('form-field-focused'); // add class of form-field-focused to body
      });

      formFields.on('focusout',function(){
        console.log('focusin');
        body.removeClass('form-field-focused'); // add class of form-field-focused to body
      });
  }


  function startProjectForm(){
      var startProjectForm = $('#startProjectForm');

      var nameField = $('#nameSP');
      var emailField = $('#emailSP');
      var webServiceField = $('#service-web');
      var servicesCont = webServiceField.closest('.work-request--services');


      // change validation messages and customize options

      startProjectForm.parsley({
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


      // act to validation errors and success 

      startProjectForm.parsley().on('form:error',function(){

          alert('validation errors');  

      }).on('form:submit',function(e){

          console.log('Form Submitted');

          // write code here to submit to DB

          

          return false;  
      });

  }

  function contactForm(){
    // alert();
    var popup = $('#contact__popup');
    var close = $('#close-contact-form');

    console.log(popup);

    // disabling swiping slide when popup is open

    popup.on('mousewheel DOMMouseScroll',function(e){
      console.log(e);
      e.stopPropagation();
    });

    // swipe support for touch devices
    var targetElement = document.getElementById('viewport'),
        mc = new Hammer(targetElement);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on('swipeup swipedown', function(e) {

      console.log(e);

    });

    close.on('click',function(){
      popup.toggleClass('off');
    });


  }

  function getViewportBasedHW(percentage,unit){

    return percentage/100 * window[unit];

  } /* getViewportBasedHW ENDS */


  function applyViewportHeights(){
    var l_viewport =  body.find('.l-viewport'); 

    var work__lockup = work.find('.work__lockup'); // quering for using further

    var outerSlider =  work__lockup.find('.outer-slider'); 

    var innerSliderItemImageContainer =  
    work__lockup.find('.inner-slider__item-image-container'); 


    l_viewport.css({
      height: (getViewportBasedHW(100,'vh')) + 'px' // height needs to be 100vh
    });
    
    outerSlider.css({
      height: (getViewportBasedHW(75,'vmin')) + 'px' // height needs to be 75vmin
    });

    innerSliderItemImageContainer.css({
      height: (getViewportBasedHW(40,'vmin')) + 'px' // height needs to be 40vmin
    });

    /* 
      using min widths (when default are already applied 
      but needs to be overwritten with increasing widths)
    */

    if (vw > 767) {
      innerSliderItemImageContainer.css({
        height: (getViewportBasedHW(25,'vmin')) + 'px' // height needs to be 25vmin
      });
    }

    if (vw > 899) {

    }
    
    if (vw > 1199) {
      outerSlider.css({
        height: (getViewportBasedHW(55,'vmin')) + 'px' // height needs to be 75vmin
      });

    }

    

    


    /* using max widths*/

    if (vw < 400) {
        innerSliderItemImageContainer.css({
          height: (getViewportBasedHW(35,'vmin')) + 'px' // height needs to be 35vmin
        });
    }

    /* using max widths and orientation*/

    if (vw > vh) {

      innerSliderItemImageContainer.css({
        'min-height': 'auto' // height needs to be 25vmin
      });

      if (vw < 1200 && vw > vh) {
          innerSliderItemImageContainer.css({
            height: (getViewportBasedHW(30,'vmin')) + 'px' // height needs to be 25vmin
          });
      }

    }





  } /* applyViewportHeights ENDS */



  $(window).on('resize',function(){
    viewportDimensions();
    applyViewportHeights();
  }); /* on resize ENDS */
  


  outerNav();
  aboutSlider();
  workSlider();

  transitionLabels();
  smallScreenOptimizerForForms();

  startProjectForm();
  contactForm();

  applyViewportHeights();


});





/* 

 $('.slider--prev, .slider--next').click(function() {

      var $this = $(this),
          curLeft = $('.slider').find('.slider--item-left'),
          curLeftPos = $('.slider').children().index(curLeft),
          curCenter = $('.slider').find('.slider--item-center'),
          curCenterPos = $('.slider').children().index(curCenter),
          curRight = $('.slider').find('.slider--item-right'),
          curRightPos = $('.slider').children().index(curRight),
          totalWorks = $('.slider').children().length,
          $left = $('.slider--item-left'),
          $center = $('.slider--item-center'),
          $right = $('.slider--item-right'),
          $item = $('.slider--item');

      $('.slider').animate({ opacity : 0 }, 400);

      setTimeout(function(){

      if ($this.hasClass('slider--next')) {
        if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
          $left.removeClass('slider--item-left').next().addClass('slider--item-left');
          $center.removeClass('slider--item-center').next().addClass('slider--item-center');
          $right.removeClass('slider--item-right').next().addClass('slider--item-right');
        }
        else {
          if (curLeftPos === totalWorks - 1) {
            $item.removeClass('slider--item-left').first().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          }
          else if (curCenterPos === totalWorks - 1) {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $item.removeClass('slider--item-center').first().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          }
          else {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $item.removeClass('slider--item-right').first().addClass('slider--item-right');
          }
        }
      }
      else {
        if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
          $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
          $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
          $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
        }
        else {
          if (curLeftPos === 0) {
            $item.removeClass('slider--item-left').last().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          }
          else if (curCenterPos === 0) {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $item.removeClass('slider--item-center').last().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          }
          else {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $item.removeClass('slider--item-right').last().addClass('slider--item-right');
          }
        }
      }

    }, 400);

    $('.slider').animate({ opacity : 1 }, 400);

    });



*/