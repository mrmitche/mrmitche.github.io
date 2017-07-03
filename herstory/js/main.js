function main(){
  $('.title').on('click', function(){
    $('.menu').fadeToggle(400);
  });
}

$(document).ready(main);