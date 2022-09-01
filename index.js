$(document).ready(function () {
 $('#mobile-menu').on('click', function () {
  $(this).toggleClass('is-active');
  $('.navbar_menu').toggleClass('active');
 });

 $('.navbar_menu .navbar_links').on('click', function() {
  $('#mobile-menu').removeClass('is-active');
  $('.navbar_menu').removeClass('active');
 });
})

