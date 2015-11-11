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
			require(["hbs!../templates/songs"], function(songTemplate) {
	  			 $("#right-box").prepend(songTemplate(songObject));
	  			 songData();
	  			 
			});
			
 		});
 		}
 	};

});



 	