// function setHeight() {
//   var width = $('.project').width();
//   $('.project').height(0.28125 * width + 32); //based on 1280x720 image
// }

function main() {

  $('.tags p').on('click', function() {
    var tagClass = '.' + $(this).text();
    $('[class*="col-"]').hide(); //hides all project boxes
    $(tagClass).show();
    $('#reset').show(); //show reset button
  });

  $('#reset').on('click', function() {
    $('#reset').hide(); //hide reset button
    $('[class*="col-"]').show(); //shows all
  });

  setHeight();
  window.onresize = setHeight;
}

$(document).ready(main);