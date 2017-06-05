// OVERLAY IMAGE IN THE PAGE WHEN CLICKED.

var $overlay = $('<div id="overlay"></div>');

$("body").append($overlay);


$(".a a").click(function(){
	event.preventDefault();
	var imageHref = $(this).attr("href");
	
	$overlay.show();

});

$overlay.click(function(){
	$(this).hide();
});