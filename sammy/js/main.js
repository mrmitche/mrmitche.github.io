function main(){
  var w = $(window).width();
  var h = $(window).height();
  //ratio of panotour currently based on screen aspect ratio
  //Consider replacing ratio with desired aspect ratio
  var ratio = 16/9;//w/h;
  var h2 = (h - $('.not-tour').height())*0.9; //0.9 ensures not extending pass frame
  var w2 = ratio * h2;
  $('.panotour').css('width',w2);
  $('.panotour').css('height',h2);
  $('#pano').css('width',w2);
  $('#pano').css('height',h2);
  //$('.panotour').css('padding-left',(w-w2)/2);
}

$(document).ready(main);