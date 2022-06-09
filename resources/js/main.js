// mixitUp
var mixer = mixitup('.grid-lates-work-container');

//Scrollyfy-js
 
$(function() {
    $.scrollify({
      section : ".scrollyfy-js",
      setHeights: false,
      updateHash: false,
    });
  });

// Haburger-menu
 
function openMenu() {
  document.getElementById('navbar').style.height = '100%'
}
function closeMenu() {
  document.getElementById('navbar').style.height = '0'
}
//Smooth Scroll

$(function(){
  $('.menu-items a, .scroll-down a, .logo a').on('click', function(){
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1500);
      
      return false;
  });
});

 















































