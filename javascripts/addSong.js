define(["jquery", "bootstrap"], function($) {

return {

addButton: $("#add-button").click(function()  {
	console.log("add button working");
var newSong = {

	"title": $("#song-title").val(),
	"artist": $("#artist-n").val(),
	"album": $("#album-n").val(),
	"genre": $("#genre-n").val()
};

$.ajax({

	url: "https://resplendent-torch-5822.firebaseio.com/songs.json",
	method: "POST",
	data: JSON.stringify(newSong)}).done(function(addedSong){

				$("#song-title").val(" ");
				$("#album-n").val(" ");
				$("#artist-n").val(" ");
				$("#genre-n").val(" ");


			})
		})
	}

});