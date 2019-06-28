import jQuery from 'jquery';
// Prevent negative numbers
// window.onload = function() {
//   var number = document.getElementById('age'); // Listen for input event on numInput.

//   number.onkeydown = function(e) {
//     if (
//       !(
//         (e.keyCode > 95 && e.keyCode < 106) ||
//         (e.keyCode > 47 && e.keyCode < 58) ||
//         e.keyCode === 8
//       )
//     ) {
//       return false;
//     }
//   };
// };
/** Back to Top **/
jQuery(document).ready(function($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function() {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass('cd-is-visible')
      : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate(
      {
        scrollTop: 0
      },
      scroll_top_duration
    );
  });
});
