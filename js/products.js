//products.js
$(window).ready(function(){
	$("#products-table img").mouseenter(function(){
		//$(this).css("width", "10em");
		$(this).animate({width: "10em"}, "fast").mouseleave(function(){
			$(this).animate({width: "8em"}, "fast");
		});
	})
});
