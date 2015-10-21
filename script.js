var addButton = document.getElementById("add-button");
addButton.addEventListener("click", function(event) {
	populateList();
	console.log("works");
});
var rightBox = document.getElementById("right-box");
function populateList() {

	var songTitle = document.getElementById("song-title").value;
	var artistName = document.getElementById("artist-n").value;
	var albumName = document.getElementById("album-n").value;
	console.log(songTitle, artistName, albumName);
	var newSong= songTitle + "-" + artistName + "-" + albumName;

	var newList = document.createElement("ul");
	console.log(newList);
	newList.innerHTML = newSong;
	rightBox.insertBefore(newList, rightBox.childNodes[0]);

	songTitle.value = " ";
	console.log(songTitle);

}
var addClick = document.getElementById("add-click");
addClick.addEventListener("click", function(event) {
	console.log(addClick);
	document.getElementById("right-box").classList.remove("right-box");
	document.getElementById("right-box").classList.add("hide-box");
	document.getElementById("hide-music").classList.remove("hide-box");
	document.getElementById("hide-music").classList.add("right-box");
});
var listMusic = document.getElementById("list-music");
listMusic.addEventListener("click", function(event) {
	document.getElementById("right-box").classList.remove("hide-box");
	document.getElementById("right-box").classList.add("right-box");
	document.getElementById("hide-music").classList.remove("right-box");
	document.getElementById("hide-music").classList.add("hide-box");
});





