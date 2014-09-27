
$(document).ready(function(){
  $('body').append("<div class='containers row1'></div>");
  $('body').append("<div class='containers row2'></div>");
  $('body').append("<div class='containers row3'></div>");
  $('body').append("<div class='containers row4'></div>");
  
  $('.containers').css({'width': '800px',
                       'height': '200px'})
  $('.row1').append("<div id='r1c1'></div>")
  $('.row1').append("<div id='r1c2'></div>")
  $('.row1').append("<div id='r1c3'></div>")
  $('.row1').append("<div id='r1c4'></div>")
  $('.row2').append("<div id='r2c1'></div>")
  $('.row2').append("<div id='r2c2'></div>")
  $('.row2').append("<div id='r2c3'></div>")
  $('.row2').append("<div id='r2c4'></div>")
  $('.row3').append("<div id='r3c1'></div>")
  $('.row3').append("<div id='r3c2'></div>")
  $('.row3').append("<div id='r3c3'></div>")
  $('.row3').append("<div id='r3c4'></div>")
  $('.row4').append("<div id='r4c1'></div>")
  $('.row4').append("<div id='r4c2'></div>")
  $('.row4').append("<div id='r4c3'></div>")
  $('.row4').append("<div id='r4c4'></div>")
  
  $('div > div').addClass('colors');

});
