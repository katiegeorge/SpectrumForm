$(document).ready(function(){
	$(".bottom2").hide();
	$(".bottom3").hide();

    $(".next-btn").click(function(){
    	//$(".bottom").addClass("moveLeft");
        $(".bottom").fadeOut("slow", function() {
        	$(".bottom2").fadeIn("slow");
        });
    });

    $(".next2-btn").click(function(){
        $(".bottom2").fadeOut("slow", function() {
        	$(".bottom3").fadeIn("slow");
        });
    });

    $(".back-btn").click(function(){
        $(".bottom2").fadeOut("slow", function() {
        	$(".bottom").fadeIn("slow");
        });
    });

    $(".back2-btn").click(function(){
        $(".bottom3").fadeOut("slow", function() {
        	$(".bottom2").fadeIn("slow");
        });
    });

    $("#datepicker").datetimepicker({
			format:'m/d/Y',
        	timepicker:false,
        });

});