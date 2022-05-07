jQuery(document).ready(function($) {

  initProgressBars();

  var lastScrollTop = 0;
  var animated = 0;
  var classRemoved = 0;
  var offset = 0;
  var scrollContainer = $("#scroll-main-container");
  scrollContainer.scroll(function () {
    var skillsPosition = $("#skills-section").offset().top;
    var skillsHeight = $("#skills-section").height();
    var skillsSection = skillsPosition + skillsHeight;

    var endPosition = $("#end-scroll").offset().top;

    var viewPortSize = $(scrollContainer).height();
    var scrollTop = scrollContainer.scrollTop();

    downScroll = scrollTop > lastScrollTop;
    lastScrollTop = scrollTop;

    if(skillsPosition <= 0) {
      if(animated == 0)
      {
        animated = 1;
        animateProgressBars();
      }
    }

    if(endPosition <= 0)
    {
      if(classRemoved == 0)
      {
        classRemoved = 1;
        console.log("Removed y-mandatory");
        scrollContainer.removeClass("y-mandatory");
      }
    }

    if(classRemoved == 1)
    {
      if(scrollTop <= skillsHeight)
      {
        classRemoved = 0;
        console.log("test");
        scrollContainer.addClass("y-mandatory");
      }
    }


  });

  $("#skill-unity").click(function(){
      animateProgressBars();
  });

  function initProgressBars() {
      $(".skill-fill").each(function() {
        $(this).animate({
            width: 'toggle'
        },
        {
            duration: 0
        });
      });
  }

  function animateProgressBars() {
      $(".skill-fill").each(function() {
        $(this).animate({
            width: 'toggle'
        },
        {
            duration: 600
        });
      });
  }
});
