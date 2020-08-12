function hoverIcon () {
  $('.header-left__items li').mouseenter( () => {
    // console.log($(this));
  })
}

window.onload = function () {
  hoverIcon ();
}