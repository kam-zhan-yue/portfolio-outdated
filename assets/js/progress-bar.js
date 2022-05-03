jQuery(document).ready(function($) {

  initProgressBars();

  var lastScrollTop = 0;
  var animated = 0;
  var classRemoved = 0;
  var offset = 0;
  var scrollContainer = $(".scroll-container");
  scrollContainer.scroll(function () {
    // var skillsPosition = $("skills-section").position();
    // var skillsTop = skillsPosition.top;
    var skillsSection = $("#skills-section").height();
    var viewPortSize = $(scrollContainer).height();
    var scrollTop = scrollContainer.scrollTop();

    downScroll = scrollTop > lastScrollTop;
    lastScrollTop = scrollTop;

    console.log("Downscroll is: "+downScroll);
    // console.log("Scroll Top: "+scrollTop+"\nSkills Section: "+skillsSection+"\nSkills Top"+skillsTop);

    if(downScroll && scrollTop >= skillsSection + offset) {
      if(animated == 0)
      {
        animated = 1;
        animateProgressBars();
      }
      if(classRemoved == 0)
      {
        classRemoved = 1;
        console.log("Removed y-mandatory");
        $("#scroll-main").removeClass("y-mandatory");
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
