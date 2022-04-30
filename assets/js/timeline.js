jQuery(document).ready(function($) {

  var scrollContainer = $(".scroll-container");
  var scrollContainer2 = $("#skills-section");
  $(scrollContainer).on('scroll', function () {
    fnOnScroll();
  });

  $(scrollContainer).on('resize', function () {
    fnOnResize();
  });


    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(scrollContainer).outerHeight(),
      agHeight = $(scrollContainer).height(),
      f = -1,
      agFlag = false;
  fnOnScroll();
  
    function fnOnScroll() {
      agPosY = $(scrollContainer).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(scrollContainer).scrollTop();
      agHeight = $(scrollContainer).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      a = agTimelineLineProgress.offset().top;
      var height = $("#skills-section").scrollTop();
      n = agPosY + agOuterHeight/2;
      
      console.log("Offset Top: "+agTimelineLineProgress.offset().top+"\nagPosY: "+agPosY+"\nScrollTop: " + $(scrollContainer).scrollTop()+"\nn: "+n);
      console.log("agOuterHeight: "+agOuterHeight);
      
      agTimelineLineProgress.css({height: n + "px"});

      agTimelineItem.each(function () {
        
        var agTop = $(this).find(agTimelinePoint).offset().top;
        var threshold = n - agPosY;
        console.log("n: "+n+"\nagTop: "+agTop);
        
        // (agTop + agPosY - $(scrollContainer).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        agTop < threshold ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }

});
