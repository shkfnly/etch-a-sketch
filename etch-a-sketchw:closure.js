
$(document).ready(function(){
  $('body').html("<div class='container'></div>");
  var i = 0
  while(++i < 4){
    (function(i){
      $('.container').html("<div id='row#" + i + "'></div>");
    })(i);
  };
  $('.container').css({'width': '800px',
                       'height': '800px'})
  $('#row3').addClass('colors');
  

});
