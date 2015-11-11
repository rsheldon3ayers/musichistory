define(["jquery"], function($) {
  return {
    getMeSomeData: function(songData) {
      $.ajax({
	    	url: "https://resplendent-torch-5822.firebaseio.com/.json",
	    	error: function (a, b, c) {
	    		console.log(b);
	    		console.log(c);
	    	}
 		}).done(function(songObject) {
			require(["hbs!../templates/artist"], function(songTemplate) {
	  			 
	  			 $(".artist-menu").append(songTemplate(songObject));
	  			 $(".artist-menu").on("click", "a", function() {
					
					console.log("filter-artist working")


					var artistValue = $(this).attr("value");

					$("div#right-box").children().hide();

					$("div#right-box").children(":contains('" + artistValue + "')").show();
					
					console.log(artistValue);

					

				    	
					})	

	  			});
			require(["hbs!../templates/album"], function(songTemplate) {
	  			 
	  			 $(".album-menu").append(songTemplate(songObject));
	  			 
	  			 $(".album-menu").on("click", "a", function() {
					
					console.log("filter-album working")


					var albumValue = $(this).attr("value");

					$("div#right-box").children().hide();

					$("div#right-box").children(":contains('" + albumValue + "')").show();
					
					console.log(albumValue);

					

				    	
					})

	  			});
			require(["hbs!../templates/genre"], function(songTemplate) {
	  			 
	  			 $(".genre-menu").append(songTemplate(songObject));
	  			 $(".genre-menu").on("click", "a", function() {
					
					console.log("filter-genre working")


					var genreValue = $(this).attr("value");

					$("div#right-box").children().hide();

					$("div#right-box").children(":contains('" + genreValue + "')").show();
					
					console.log(genreValue);

					

				    	
					})
	  			 	

	  			});

			}
		)}	
 	}
});