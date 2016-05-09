$(function(){
  $('.color-cube').each(function(){
    var bgc = $(this).attr('class').split(" ")[1];
    var hex = rgb2hex($(this).css('background-color'));

    $(this).append("<span>"+ bgc + ": <br/>"+ hex +"</span>");
  });

  $(function(){
    $("form").on('submit', function(e){
      e.preventDefault();
    });
  });
});

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
