
$(document).ready(function(){
  //While loop including scopes to create container div rows
  var i = 0;
  while(++i < 5){
    (function(i){
        $('body').append("<div class='containers row" + i + "'></div>");
    })(i);
  }
  //Double while loop containing scopes to create columns
  $('.containers').css({'width': '800px', 'height': '200px'})
  var j = 0;
  while(++j < 5){
    (function(j){
      var k = 0;
      while(++k < 5){
        (function(k){
        $('.row' + j).append("<div id='r" + j +"c" + k + "'></div>")
      })(k);
      }
  })(j);
  }
  $('div > div').addClass('colors');

  

});
