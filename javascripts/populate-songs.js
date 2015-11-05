define(["jquery"], function($) {
  return {
    getMeSomeData: function(songData) {
      $.ajax({
	    	url: "songList2.json",
	    	error: function (a, b, c) {
	    		console.log(b);
	    		console.log(c);
	    	}
 		}).done(function(songs){
 			 for (var i = 0; i < songs.songs.length; i++) {
	   	console.log(songs.songs);
	     var currentSong = songs.songs[i];
	     
	     $("#more-button").before("<div>" + currentSong.title + " | " + currentSong.artist + " | " + currentSong.album + " | " + "<input type='submit' name='delete-message' value='Delete' class='delete-message'>" + "</div>");
	     console.log("current song", currentSong.title);

	 			
	 			}
	 			songData(songs);
	 		});

		}
	};	   
});