// @codekit-prepend "/vendor/hammer-2.0.8.js";

window.contentIndex = [
   'intro', /*'work',*/ 'hire', 'info', 'contact'
];

window.$document = jQuery( document );



/************* 

    =utility functions 

*************/


// disabling swiping slide when popup is open
function disableSwipe(el){

  el.on('mousewheel DOMMouseScroll',function(e){
    console.log(e);
    e.stopPropagation();
  });

} // END of disableSwipe


function checkFields(field){
    var el = $(field), textVal = el.val();

    if ($.trim(textVal) === "") {
      el.removeClass('has-value');
    } else {
      console.log('el');
      console.log(el);
      console.log('has value');
      el.addClass('has-value');
    }

    // correct mobile device window position
    window.scrollTo(0, 0);

}


function getViewportBasedHW(percentage,unit){
  return percentage/100 * window[unit];

} /* getViewportBasedHW ENDS */




$document.ready(function($) {

  var $document = this;
  window.body = $('body');

  window.viewport = $('#viewport');
  window.navToggle = body.find('.header--nav-toggle');
  window.perspective = body.find('.perspective');

  window.sideNav = body.find('.side-nav');
  window.sideNavLi = sideNav.find('li');

  window.$outerNav = body.find('.outer-nav');
  window.outerNavLi = $outerNav.find('li');
  window.outerNavReturn = body.find('.outer-nav--return');
   
  window.lastItem = sideNav.children().length - 1;

  window.workPopup = $('#work__popup');
  window.work = body.find('.work');
  


  // test touch is available or not
  if($document.ontouchstart){
    window.touchAvail = true;
    body.addClass('touch');

  }else{
    window.touchAvail = false;
    body.removeClass('touch');
  }



  // helper function to save viewport dimensions at any point of time
  window.viewportDimensions = function saveViewportDimensions(){

    window.vh = $document.documentElement.clientHeight;
    window.vw = $document.documentElement.clientWidth;
    window.wh = $(window).height();
    window.ww = $(window).width();
    window.dh = $(document).height();
    window.dw = $(document).width();
    window.vmin = vh > vw ? vw : vh;
    window.vmax = vh < vw ? vw : vh;



    if(vw< 1024){
      body.addClass('mobile');
    }else{
      body.removeClass('mobile');
    }

  }

  viewportDimensions();



  window.hire = body.find('.hire');
  window.$startProjectForm = hire.find('form');
  window.hireWrapper = hire.children('.hire__wrapper');

  // for wp form
  if(window.isWordpress){
    
    reShapeWPHireForm(); // as we are using htmlforms plugin

    function reShapeWPHireForm(){ 

      var hfFieldsWrap = $startProjectForm.find(".hf-fields-wrap");
      var formSections = $startProjectForm.find(".form-section");

      formSections.addClass('hf-fields-wrap'); // add this class to each section to help the form plugin do things
      var myFormElements = hfFieldsWrap.html(); // extract the html

      $startProjectForm.addClass('work-request'); // add class .work-request to form el
      hfFieldsWrap.remove(); // remove hf-fields-wrap 
      
      $startProjectForm.prepend(myFormElements); 

      // var wpFormsSubmitCont = $startProjectForm.find(".wpforms-submit-container");
      // var wpFormsFieldCont = $startProjectForm.find(".wpforms-field-container");
      // var wpFormsHTML = wpFormsFieldCont.find(".wpforms-field-html");
      // var wpFormsDiv =  wpFormsHTML.find("> div");
      // var formNav = wpFormsHTML.find(".form-navigation");

      // remove the original submit-block div
      // var mySubmitBlock = formNav.find(".submit-block").remove();

      // move the wpforms-submit-container div to my form-navigation div and apply a class to it
      // wpFormsSubmitCont.addClass("submit-block").appendTo(formNav);
      
      // extract the html
      // var myFormElements = wpFormsDiv.html();

      
      // wpFormsFieldCont.remove(); //remove the wpforms-field-container
      // wpFormsDiv.remove(); //remove the wpforms-field-container
      
      // wpFormsHTML.prepend(myFormElements);

    }
  }


  window.about = body.find('.about');
  window.contact = body.find('.contact'); // div.contact inside contact section 
  window.formFields = body.find('input, textarea');
  window.contactPopup = $('.contact__popup');

  




  /* START - helper functions for navigating through slides */
  

  // determine scroll, swipe, and arrow key direction
  window.updateHelper = function updateHelper(param) {

    var curActive = sideNav.find('.is-active'),
        curPos = sideNav.children().index(curActive),
        nextPos = 0;

    if (param.type === "swipeup" || param.keyCode === 40 || param > 0) { // to go down a section
      if (curPos !== lastItem) nextPos = curPos + 1;

      updateNavs(contentIndex[nextPos]);
      updateContent(contentIndex[curPos], contentIndex[nextPos]);

    }
    else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){ // to go up a section
      curPos !== 0 ? (nextPos = curPos - 1) : (nextPos = lastItem);
      
      updateNavs(contentIndex[nextPos]);
      updateContent(contentIndex[curPos], contentIndex[nextPos]);
    
    }

  };

  // sync side and outer navigations
  window.updateNavs = function updateNavs(dataContent) {      
    var navs = sideNav.add(outerNav);
    var li = navs.children();

    // console.log(li);

    li.removeClass('is-active');
    
    li.filter(function(){
      return $(this).attr('data-content') == dataContent;
    }).addClass('is-active');
    
  };

  // update main content area
  window.updateContent = function updateContent(curContent, dataContent) {

    // save the next active section for the session to restore on reload
    sessionStorage.setItem('activeSectionClass', dataContent);

    var mainContent = $('.main-content');
    var content = mainContent.children(); 

    content.removeClass('section--is-active');

    var activeSlide = content.filter(function(){
      return $(this).attr('data-content') == dataContent;
    }).addClass('section--is-active');

    

    content.removeClass('section--next section--prev');

    if ( dataContent === contentIndex[0] ) { //when active slide = first one
        
        content.filter(function(){
          return $(this).attr('data-content') == contentIndex[lastItem];
        }).addClass('section--prev');

        addNext();
    
    }
    else if ( dataContent === contentIndex[lastItem] ){ //when active slide = last one

      content.filter(function(){
        return $(this).attr('data-content') == contentIndex[0];
      }).addClass('section--next');

      addPrev();
    
    }else{
       addPrev();
       addNext();
    }

    function addPrev(){ activeSlide.prev().addClass('section--prev'); }
    function addNext(){ activeSlide.next().addClass('section--next'); }

    /*else if (contentIndex.indexOf(curContent) < contentIndex.indexOf(dataContent)) {
      
      content.filter(function(){

        return $(this).attr('data-content') == curContent;

      }).addClass('section--prev')
        .next().next()
        .addClass('section--prev');

      console.log(2);
      console.log(curContent);
    
    }
    else {
      content.filter(function(){
        return $(this).attr('data-content') == curContent;
      }).addClass('section--next');
      console.log(3);
      console.log(curContent);
    }
    */

    // add some more features like, adding scroll down button on first slide etc.

    /*if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header--cta').addClass('is-active');
    }
    else {
      $('.header--cta').removeClass('is-active');
    }
    */
  };

  window.changeSlideTo = function changeSlideTo(updateTo){

      var curActive = sideNav.find('.is-active'),
          curPos = curActive.attr('data-content'),
          nextPos = updateTo;

      updateNavs(nextPos);
      updateContent(curPos, nextPos);

  };
  


  /* END -  helper functions for navigating through slides */




  function outerNav() {

    /* Opens the navigation menu */
    navToggle.click(function(){

      perspective.addClass('perspective--modalview');

      setTimeout(function(){
        perspective.addClass('effect-rotate-left--animate');
      }, 25);

      $outerNav.add(outerNavLi).add(outerNavReturn).addClass('is-vis');
    });

    /* Closes the navigation menu on click of an item*/    
    outerNavReturn.add(outerNavLi).click(function(){

      perspective.removeClass('effect-rotate-left--animate');

      setTimeout(function(){
        perspective.removeClass('perspective--modalview');
      }, 400);

      $outerNav.add(outerNavLi).add(outerNavReturn).removeClass('is-vis');
    });

  }

  window.applyViewportHeights =  function applyViewportHeights(){
    var l_viewport =  viewport; 

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

  }; /* applyViewportHeights ENDS */


  window.smallScreenOptimizerForForms = function smallScreenOptimizerForForms(){

      formFields.on('focusin',function(){
        // console.log('focusin');
        body.addClass('form-field-focused'); // add class of form-field-focused to body

        hireWrapper.css({
          minHeight: hireWrapperHeight  + 'px'
        });


        hire.on('mousewheel DOMMouseScroll',function(e){
          e.stopPropagation();
          // console.log('stopped');
        });

      });


      formFields.on('focusout',function(){
        // console.log('focusout');
        body.removeClass('form-field-focused'); // add class of form-field-focused to body

        hireWrapper.css({
          minHeight: 'auto'
        });

        hire.off('mousewheel DOMMouseScroll');

      });

  };


  window.updateToLastPos = function updateToLastPos(){
    
    var lastKnownPos = sessionStorage.getItem('activeSectionClass');
    
    if (contentIndex.indexOf(lastKnownPos) == -1) return;

    var curPos = contentIndex[0],
        nextPos = lastKnownPos;

      
    updateNavs(nextPos);
    updateContent(curPos, nextPos);
    
  }


  window.loadDeferredImages = function loadImages(argument) {

    var breakpoints = {
      smartphones: 0,
      phablets: 600,
      tablets: 768,
      laptops: 900,
      desktops: 1200,
      largedesktops: 1600
    }

    var all = body.find('.image-defer');

    var imgTags = all.filter(function(i){
      return $(this).hasClass('defer-img');
    });

    var imgBgs = all.filter(function(i){
      return $(this).hasClass('defer-bg-img');
    });


    

    var imgLoadOffsetArr = [];

    var bgImgLoadOffsetArr = [];
    var bgPlaceholdersFound = false;
    

    function getImages(){

      var getImagesArr = [];
      var continueGetImages = true;

      imgTags.each(function(i,el){
        
        var width = window.vw;
        var $el = $(el);
        var placeholder = $el.attr('src') || '';
        var src;
        var dataSrcLargeDesktops = $el.attr('data-src-' + breakpoints['largedesktops']) || $el.attr('data-src-' + breakpoints['desktops']) || $el.attr('data-src-' + breakpoints['laptops']) || $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcDesktops = $el.attr('data-src-' + breakpoints['desktops']) || $el.attr('data-src-' + breakpoints['laptops']) || $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcLaptops = $el.attr('data-src-' + breakpoints['laptops']) || $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcTablets = $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcPhablets = $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcSmartphones = $el.attr('data-src');
        

        if (width >= breakpoints['largedesktops']){
          src = dataSrcLargeDesktops;
        }
        else if(width >= breakpoints['desktops']){
          src = dataSrcDesktops;
        }
        else if(width >= breakpoints['laptops']){
          src = dataSrcLaptops;
        }
        else if(width >= breakpoints['tablets']){
          src = dataSrcTablets;
        }
        else if(width >= breakpoints['phablets']){
          src = dataSrcPhablets;
        }
        else{
          src = dataSrcSmartphones;
        }
        
        
        var loadOffset = $el.attr('data-load-offset'); // start loading after a certain amount of time after which load & buffer will be checked         
        loadOffset ?  imgLoadOffsetArr.push(loadOffset) : false;
        
        var async = $el.attr('data-async') || true; // default: true


        var imgObj = {
          src: src, 
          placeholder: placeholder, 
          $el: $el,
          async: async
        }

        
        getImagesArr.push(imgObj);
 
      });

      

      function SwapImgSrc(obj){

        var $el = obj.$el;
        var placeholder = obj.placeholder;
        var src = obj.src;
        var async = obj.async;

        $el.attr('src',src); // change the src

        async ? getNextImage() : false;

        $el.on('load error', function(event){
            $el.off('load error');
            
            !async ? getNextImage() : false; 

            if(event.type == "error"){
                $el.src = $el.attr('src',placeholder);
                console.log('error');
                return;
            }

        });


        function getNextImage(){
          var imgObj = getImagesArr[getImagesArr.indexOf(obj) + 1];

          if (imgObj) {
            SwapImgSrc(imgObj);
          }
          
        }

      } /* END  - SwapImgSrc */


      function initImg(){
        if (getImagesArr.length){
          SwapImgSrc(getImagesArr[0]); // get the first image
        }
      }


   
      if(imgLoadOffsetArr.length){ 
        setTimeout(initImg,imgLoadOffsetArr[0]); 
        return;      
      }

      initImg();

    }


    function getBgImages(){

      var getImagesArr = [];

      imgBgs.each(function(i,el){
      
        var width = window.vw;
        var $el = $(el);
        var placeholder = $el.attr('data-placeholder') || '';
        
        if(placeholder){
          bgPlaceholdersFound = true;
        }

        var placeholderStyles = $el.attr('data-placeholder-bg-img-styles') || '';
        var src, bgImgStyles = [];

        var fullBg = $el.attr('data-full-bg') || false;

        var dataSrcLargeDesktops = $el.attr('data-src-' + breakpoints['largedesktops']) || $el.attr('data-src-' + breakpoints['desktops']) || $el.attr('data-src-' + breakpoints['laptops']) || $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcDesktops = $el.attr('data-src-' + breakpoints['desktops']) || $el.attr('data-src-' + breakpoints['laptops']) || $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcLaptops = $el.attr('data-src-' + breakpoints['laptops']) || $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcTablets = $el.attr('data-src-' + breakpoints['tablets']) || $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcPhablets = $el.attr('data-src-' + breakpoints['phablets']) || $el.attr('data-src');
        var dataSrcSmartphones = $el.attr('data-src');
        
        var addStylesLargeDesktops = $el.attr('data-bg-img-styles-' + breakpoints['largedesktops']);
        var addStylesDesktops = $el.attr('data-bg-img-styles-' + breakpoints['desktops']);
        var addStylesLaptops = $el.attr('data-bg-img-styles-' + breakpoints['laptops']);
        var addStylesTablets = $el.attr('data-bg-img-styles-' + breakpoints['tablets']);
        var addStylesPhablets = $el.attr('data-bg-img-styles-' + breakpoints['phablets']);
        var addStylesSmartphones = $el.attr('data-bg-img-styles');


        if(addStylesLargeDesktops && width >= breakpoints['largedesktops']) bgImgStyles.unshift(addStylesLargeDesktops);
        if(addStylesDesktops && width >= breakpoints['desktops']) bgImgStyles.unshift(addStylesDesktops);
        if(addStylesTablets && width >= breakpoints['tablets']) bgImgStyles.unshift(addStylesTablets);
        if(addStylesLaptops && width >= breakpoints['laptops']) bgImgStyles.unshift(addStylesLaptops);
        if(addStylesPhablets && width >= breakpoints['phablets']) bgImgStyles.unshift(addStylesPhablets);
        if(addStylesSmartphones && width >= breakpoints['smartphones']) bgImgStyles.unshift(addStylesSmartphones);


        if (width >= breakpoints['largedesktops']){
          src = dataSrcLargeDesktops;
        }
        else if(width >= breakpoints['desktops']){
          src = dataSrcDesktops;
        }
        else if(width >= breakpoints['laptops']){
          src = dataSrcLaptops;
        }
        else if(width >= breakpoints['tablets']){
          src = dataSrcTablets;
        }
        else if(width >= breakpoints['phablets']){
          src = dataSrcPhablets;
        }
        else{
          src = dataSrcSmartphones;
        }
          
        
        var loadOffset = $el.attr('data-load-offset'); // start loading after a certain amount of time after which load & buffer will be checked         
        loadOffset ?  bgImgLoadOffsetArr.push(loadOffset) : false;
        
        var async = $el.attr('data-async') || true; // default: true
        
        var imgObj = {
          placeholder: placeholder,
          placeholderStyles: placeholderStyles,
          src: src, 
          bgImgStyles: bgImgStyles, 
          $el: $el,
          async: async,
          loadOffset: loadOffset,
          fullBg: fullBg
        }

        
        getImagesArr.push(imgObj);
 
      });

      

      function SwapBgImg(obj){

        var $el = obj.$el;
        var placeholder = obj.placeholder;
        var placeholderStyles = obj.placeholderStyles;
        var bgImgStyles = obj.bgImgStyles;
        var fullBg = obj.fullBg;
        var src = obj.src;
        var async = obj.async;
        // console.log('-------------');
        // console.log(src);
        // console.log(fullBg);
        // console.log(bgImgStyles);

        if (placeholder) {
          // console.log(placeholder);
          // console.log(placeholderStyles);
          
          if (fullBg) {
            $el.css('background', src ); // change the full background
            applyPlaceholderBgStyles();

            return;
          }

          var placeholder_ = $('<img/>');

          placeholder_.attr('src',placeholder).on('load error', function(event) {
              placeholder_.off('load error');

              // console.log('placeholder event fired: '+ event.type);

              $(this).remove(); // prevent memory leaks as @benweet suggested

              if(event.type == "error"){
                  console.log('placeholder error');
                  return;
              }
              
              $el.css('background-image', ('url('+ placeholder + ')') ); // change the background image
              
              applyPlaceholderBgStyles();
         
          });

          function applyPlaceholderBgStyles(){
              // split each rule at ; to new array (items)
              var styles = placeholderStyles.split(";"); 
                  
              //split each of them by prop and value
              $.each(styles, function(index, style){
                  if(!$.trim(style)) return;
                  // console.log(style);
                  
                  var separation = style.indexOf(':');
                  var prop = $.trim( style.slice(0, separation) );
                  var value = $.trim( style.slice(separation + 1, style.length) );
                  // console.log($el);
                  
                  $el.css(prop, value);
                  
              });

              if(bgImgLoadOffsetArr.length) {
                setTimeout(getRealImage,bgImgLoadOffsetArr[0]);    
              }else{
                getRealImage();
              }
          }

        }else{
          getRealImage();
        }

    
        function getRealImage() {

            if (fullBg) {
              $el.css('background', src ); // change the full background
              applyBgStyles();
              return;
            }

            var image_ = $('<img/>');

            image_.attr('src',src).on('load error', function() {
                image_.off('load error');

                // console.log('event fired: '+ event.type);

                $(this).remove(); // prevent memory leaks as @benweet suggested

                !async ? getNextImage() : false; 

                if(event.type == "error"){
                    console.log('error');
                    return;
                }
                
                $el.css('background-image', ('url(' + src + ')') ); // change the background image
                applyBgStyles();
            });

            function applyBgStyles(){
                // apply other styles from the styles collected
                $.each(bgImgStyles,function(i,styleString){

                  if(!$.trim(styleString)) return;

                  // split each rule at ; to new array (items)
                  var styles = styleString.split(";"); 
                  
                  //split each of them by prop and value
                  $.each(styles, function(index, style){
                      if(!$.trim(style)) return;
                      // console.log(style);

                      var separation = style.indexOf(':');
                      var prop = $.trim(style.slice(0, separation));
                      var value = $.trim(style.slice(separation + 1, style.length));
                      
                      $el.css(prop,value);
                      
                  });
                });

                async ? getNextImage() : false;
            }

            
        }



        function getNextImage(){
          var imgObj = getImagesArr[getImagesArr.indexOf(obj) + 1];

          if (imgObj) {
            SwapBgImg(imgObj);
          }
          
        }

      } /* END  - SwapImgSrc */


      function initBgImg(){
        if (getImagesArr.length){
          SwapBgImg(getImagesArr[0]); // get the first image
        }

      }

      if(bgImgLoadOffsetArr.length && !bgPlaceholdersFound){ 
        setTimeout(initBgImg,bgImgLoadOffsetArr[0]); 
        return;      

      }

      initBgImg();
      
     
    }


    getImages();
    getBgImages();


    // all.filter()
  }



  updateToLastPos(); // update to the last known section

 
  applyViewportHeights(); // apply viewport based W & H
  outerNav(); // make outer nav work
  smallScreenOptimizerForForms(); // optimize forms (or section with forms) in small screens like mobile phones to scroll up on focus

  // include files in this order after main.js
  // 1. events.js
  // 2. forms.js
  // 3. work.js
  // 4. about.js


});

