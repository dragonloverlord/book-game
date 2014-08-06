$(document).ready(function(){
  $(function() {
    $( "#progressbar" ).progressbar({
      value: 0,
      max: 100
    });
  });
});

function picAdder(time){
  var money = gt("money-div");
  money.setAttribute("style","background-color:#EEE");
  $(document).ready(function(){
      $(function() {
        $( "#progressbar" ).progressbar( "option", "max", time );
      });
    });
  atime = time/100;
  atimeT = time/100;
    $(document).ready(function(){
      $(function() {
        timeout = setTimeout(doLoop, 0);
        function doLoop(){
        $( "#progressbar" ).progressbar( "option", "value", atime );
        atime = atime + atimeT;
        if(atime < time){
          timeout = setTimeout(doLoop, atimeT);
        }else{
          clearTimeout(timeout);
          setTimeout(picRemover,500);
        }
        }
      });
    });
}

function picRemover(){
  var money = gt("money-div");
  money.setAttribute("style","");
  $(document).ready(function(){
      $(function() {
        $( "#progressbar" ).progressbar( "option", "value", 0 );
      });
    });
}

