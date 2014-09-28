
$(document).ready(function(){
  //While loop including scopes to create container div rows
  function grid(size){
  var i = 0;
  var rows = parseInt(size) + 1;
  var columns = parseInt(size) + 1;
  console.log(rows);
  console.log(columns);
  console.log(size);
  var height = 800 / (size);
  var width = 800 / (size);
  while(++i < rows){
    (function(i){
        $('body').append("<div class='containers row" + i + "'></div>");
    })(i);
  }
  //Double while loop containing scopes to create columns
  $('.containers').css({'width': '800px', 'height': height})
  var j = 0;
  while(++j < rows){
    (function(j){
      var k = 0;
      while(++k < columns){
        (function(k){
        $('.row' + j).append("<div id='r" + j +"c" + k + "'></div>")
      })(k);
      }
  })(j);
  }
  $('div > div').addClass('colorsOff');
  $('div > div').css({'width': width, 'height': height})
  $('div > div').hover(
    function(){
       $(this).addClass('colorsOn');
  }, function(){
    $(this).addClass('colorsOn2');
  });
  $('div > div').click(function(){
    $('div > div').removeClass('colorsOn');
    $('div > div').removeClass('colorsOn2')

  })
  $('body').append('<button>Click To Reset</button');
  $('button').css({'margin' : '0 auto'})
  $('button').click(function(){
    $('div > div').removeClass('colorsOn');
    $('div > div').removeClass('colorsOn2');
    var newsize = prompt("How large would you like grid?");
    console.log(newsize);
    $('body').html('')
    grid(newsize);
  })
  };
  grid(16);

});
