define(["jquery", "bootstrap"], function($) {
	
$(function () {
	$('.dropdown-toggle').dropdown();
});
	// var addClick = 
	$("a[id='#add-click']").click(function() {
		// console.log("In addClick", addClick);
		$("#right-box").removeClass("right-box").addClass("hide-box");
		$("#hide-music").removeClass("hide-box").addClass("right-box");
	});

	// var listMusic = 
	$("a[id='#list-music']").click(function(event) {
		$("#right-box").removeClass("hide-box").addClass("right-box");
		$("#hide-music").removeClass("right-box").addClass("hide-box");
	});
	

		
});
	
	






	


