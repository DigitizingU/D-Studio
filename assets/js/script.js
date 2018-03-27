// @codekit-prepend "/vendor/hammer-2.0.8.js";

$( document ).ready(function() {

  var work = $('.work');
  var hire = $('.hire');

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

  $('.cta').click(function(){

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);

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

    $('.header--nav-toggle').click(function(){

      $('.perspective').addClass('perspective--modalview');
      setTimeout(function(){
        $('.perspective').addClass('effect-rotate-left--animate');
      }, 25);
      $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');

    });

    $('.outer-nav--return, .outer-nav li').click(function(){

      $('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function(){
        $('.perspective').removeClass('perspective--modalview');
      }, 400);
      $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

    });

  }

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

    $('.work-request--information input').focusout(function(){

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

  outerNav();
  workSlider();
  transitionLabels();

  startProjectForm();

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