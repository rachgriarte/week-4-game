// JavaScript function that wraps everything
$(document).ready(function() {

// Visibility Buttons
  $(".vis-button").on("click", function() {
    $(".celine-bag").animate({ opacity: "1" });
});

  $(".invis-button").on("click", function() {
    $(".celine-bag").animate({ opacity: "0.05" });
});

// Stretch Buttons
  $(".stretch-btn").on("click", function() {
    $(".celine-bag").animate({ height: "1000px", width: "200px"});
});

  $(".unstretch-btn").on("click", function() {
    $(".celine-bag").animate({ height: "300px", width: "450px"});
});

// Move Buttons
  $(".up-button").on("click", function() {
    $(".celine-bag").animate({ top: "-=200px" }, "normal");
});

  $(".down-button").on("click", function() {
    $(".celine-bag").animate({ top: "+=200px" }, "normal");
});

  $(".left-button").on("click", function() {
    $(".celine-bag").animate({ left: "-=200px" }, "normal");
});

  $(".right-button").on("click", function() {
    $(".celine-bag").animate({ left: "+=200px" }, "normal");
});

  $(".back-button").on("click", function() {
    $(".celine-bag").animate({ top: "50px", left: "80px" }, "fast");
});

// Move Buttons (Keyboard Down)
  $(document).keyup(function(e) {
    switch (e.which) {
      case 40:
        $(".celine-bag").animate({ top: "+=200px" }, "normal");
    }
});

// Move Buttons (Keyboard Right)
  $(document).keyup(function(e) {
    switch (e.which) {
      case 39:
        $(".celine-bag").animate({ left: "+=200px" }, "normal");
    }
});

// Move Buttons (Keyboard Up)
  $(document).keyup(function(e) {
    switch (e.which) {
      case 38:
        $(".celine-bag").animate({ top: "-=200px" }, "normal");
    }
});

// Move Buttons (Keyboard Left)
  $(document).keyup(function(e) {
    switch (e.which) {
      case 37:
        $(".celine-bag").animate({ left: "-=200px" }, "normal");
    }
});
});