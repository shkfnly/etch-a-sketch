$(document).ready(function(){
  $('body').html("<div class='container'></div>")
  for(var i = 0; i < 4; i++){
    $('.container').html("<div id='row#" + i + "'></div>");
  };
  $('div').addClass('colors');
  

});
