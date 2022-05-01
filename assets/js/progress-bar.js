jQuery(document).ready(function($) {

  initProgressBars();

  var animated = 0;
  var offset = 0;
  var scrollContainer = $(".scroll-container");
  scrollContainer.scroll(function () {
    var skillsSection = $("#skills-section").height();
    var viewPortSize = $(scrollContainer).height();
    var scrollTop = scrollContainer.scrollTop();
    if(scrollTop >= skillsSection + offset && animated == 0) {
      animated = 1;
      animateProgressBars();
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
