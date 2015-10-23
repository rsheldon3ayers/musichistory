$(document).ready(function() {
	
	var addButton = $("#add-button").click(function (){
	
		console.log("Hi, BOB!!");
		$.ajax({
	    	url: "songList.json",
	    	error: function (a, b, c) {
	    		console.log(b);
	    		console.log(c)
	    	}
 		}).done(populateList);
 		// console.log(content);
		// populateList();
		// populateArtistSelect();
		// $("#song-title").val(" ");
		// $("#artist-n").val(" ");
		// $("#album-n").val(" ");
	});

	function populateArtistSelect () {
		console.log("Hi BOB")
		var  artistOption= $("#artist-name");
	    var artistN = $("#artist-n").val();
	    console.log(artistN);
	    var option = artistOption.append("<option></option>");
	    
	    
	   };

	var rightBox = $("#right-box");
	 function populateList(songs) {
	 	console.log("works")
	
		var songTitle = $("#song-title").val();
		var artistName = $("#artist-n").val();
		console.log(artistName);
		var albumName = $("#album-n").val();
		console.log(songTitle, artistName, albumName);
		var newSong= songTitle + " " + artistName + " " + albumName;

		//add new song to the Song List
		var newList = "<div>";
		console.log(newList);
		newList += newSong + "</div>";
		
		rightBox.prepend(newList);
		console.log(newSong);
		
		
	   for (var i = 0; i < songs.songs.length; i++) {
	   	console.log(songs.songs);
	     var currentSong = songs.songs[i];
	     $("#more-button").before("<h1>" + currentSong.title + "</h1>");
	     console.log("current song", currentSong.title);
	   
	 }
		$("#song-title").val(" ");
		$("#artist-n").val(" ");
		$("#album-n").val(" ");

		
		// console.log(songTitle);

	}
	$("#more-button").on("click", function(){
		$.ajax({
	    	url: "songList2.json",
	    	error: function (a, b, c) {
	    		console.log(b);
	    		console.log(c)
	    	}
 		}).done(function(songs){
 			 for (var i = 0; i < songs.songs.length; i++) {
	   	console.log(songs.songs);
	     var currentSong = songs.songs[i];
	     $("#more-button").before("<h1>" + currentSong.title + "</h1>");
	     console.log("current song", currentSong.title);
	   
	 }
 		});
	})
	var addClick = $("#add-click").click(function() {
		console.log(addClick);
		$("#right-box").removeClass("right-box").addClass("hide-box");
		$("#hide-music").removeClass("hide-box").addClass("right-box");
	});

	var listMusic = $("#list-music").click(function(event) {
		$("#right-box").removeClass("hide-box").addClass("right-box");
		$("#hide-music").removeClass("right-box").addClass("hide-box");
	});
	


});




