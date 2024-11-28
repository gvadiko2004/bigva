var $circle = $('.circle');

// Function to move the circle on mousemove
function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX - 30, // Adjust to center the circle over the mouse position
      top: e.pageY - 30
    }
  });
}

// Bind the mousemove event to the window
$(window).on('mousemove', moveCircle);
