define(["jquery"], function($) {
	
	var addButton = $("#add-button").click(function (){
	
		console.log("Hi, BOB!!");
		$.ajax({
	    	url: "songList.json",
	    	error: function (a, b, c) {
	    		console.log(b);
	    		console.log(c);
	    	}
 		}).done(populateList);
 	
	});

	function populateArtistSelect () {
		console.log("populateArtistSelect");
		var  artistOption= $("#artist-name");
	    var artistN = $("#artist-n").val();
	    console.log(artistN);
	    var option = artistOption.append("<option></option>");
	    
	    
	   }

	var rightBox = $("#right-box");
	 function populateList(songs) {
	 	console.log("works");
	
		var songTitle = $("#song-title").val();
		var artistName = $("#artist-n").val();
		console.log(artistName);
		var albumName = $("#album-n").val();
		console.log(songTitle, artistName, albumName);
		var newSong= songTitle + " " + artistName + " " + albumName + "<input type='submit' name='delete-message' value='Delete' id='delete-message'>";

		//add new song to the Song List
		var newList = "<div>";
		console.log(newList);
		newList += newSong + "</div>";
		
		rightBox.prepend(newList);
		console.log(newSong);
		
		
	   for (var i = 0; i < songs.songs.length; i++) {
	   	console.log(songs.songs);
	    currentSong = songs.songs[i];
	     $("#more-button").before("<div>" + currentSong.title + " | " + currentSong.artist + " | " + currentSong.album + " | " + "<input type='submit' name='delete-message' value='Delete' id='delete-message'>" + "</div>");
	     console.log("current song", currentSong.title);
	   
	 }
		$("#song-title").val(" ");
		$("#artist-n").val(" ");
		$("#album-n").val(" ");

		
		// console.log(songTitle);

	}
	var addClick = $("a[id='#add-click']").click(function() {
		console.log("In addClick", addClick);
		$("#right-box").removeClass("right-box").addClass("hide-box");
		$("#hide-music").removeClass("hide-box").addClass("right-box");
	});

	var listMusic = $("a[id='#list-music']").click(function(event) {
		$("#right-box").removeClass("hide-box").addClass("right-box");
		$("#hide-music").removeClass("right-box").addClass("hide-box");
	});
	
	$("body").click(function(event){
		
		console.log("Works");
		if(event.target.className === "delete-message"){
			event.target.parentNode.remove();
		}
		
		});

});

	


