<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

$(document).ready(function(){
    $("p").hide();
    
    $("#btn1").click(function(){
        $("#p1").toggle();
   });

   $("#btn2").click(function(){
        $("#p2").toggle();
   });

   $("#btn3").click(function(){
        $("#p3").toggle();
    });
    $("#btn4").click(function(){
        $("#p4").toggle();
    });
});
