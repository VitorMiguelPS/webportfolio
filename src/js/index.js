function hoverItems () {
  $('.header-left').mouseenter( () => {
    $('.header-left__items ul li a p').addClass("showMenu");
  })
  $('.header-left').mouseleave( () => {
    $('.header-left__items ul li a p').removeClass("showMenu");
  })
}

window.onload = function () {
  hoverItems ();
}