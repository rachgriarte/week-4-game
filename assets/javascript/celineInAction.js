$(document).ready(function() {
// Move Buttons
  $(".up-button").on("click", function() {
    $(".celine-bag").animate({ top: "-=100px" }, "normal");
});

  $(".down-button").on("click", function() {
    $(".celine-bag").animate({ top: "+=100px" }, "normal");
});

  $(".left-button").on("click", function() {
    $(".celine-bag").animate({ left: "-=100px" }, "normal");
});

  $(".right-button").on("click", function() {
    $(".celine-bag").animate({ left: "+=100px" }, "normal");
});

  $(".back-button").on("click", function() {
    $(".celine-bag").animate({ top: "70px", left: "40px" }, "fast");
});

// Move Buttons (Keyboard Down)
  $(document).keyup(function(e) {
    switch (e.which) {
      case 40:
        $(".celine-bag").animate({ top: "+=100px" }, "normal");
        break;
      case 39:
        $(".celine-bag").animate({ left: "+=100px" }, "normal");
        break;
      case 38:
        $(".celine-bag").animate({ top: "-=100px" }, "normal");
        break;
       case 37:
        $(".celine-bag").animate({ left: "-=100px" }, "normal");
        break;
    }
});

// Stretch Buttons
  $(".stretch-btn").on("click", function() {
    $(".celine-bag").animate({ height: "700px", width: "400px"});
});

  $(".unstretch-btn").on("click", function() {
    $(".celine-bag").animate({ height: "100px", width: "250px"});
});

// Visibility Buttons
$(".vis-button").on("click", function() {
        $(".celine-bag").animate({ opacity: "2" });
      });

      $(".invis-button").on("click", function() {
        $(".celine-bag").animate({ opacity: "0.05" });
      });
});