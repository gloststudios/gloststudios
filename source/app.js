$(document).ready(function() {
  // Fade the body in
  $("body").addClass("visible")

  // Menu system
  ;(function() {
    $(".menu-wrapper").on("click", function() {
      $(".hamburger-menu").toggleClass("animate");
      // Expand the overlay. Was it fullscreen?
      $("body").toggleClass("no-scroll");
      $(".navigation-menu").toggleClass("visible");
    })
  })()
  //Masonry layout
  // $(".grid").imagesLoaded(function () {
  //     $(".grid").masonry({
  //         itemSelector: ".grid-item"
  //     });
  // });
  // console.log("loaded")
})
