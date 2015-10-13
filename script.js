//1. Each student must add one song to the beginning and the end of the array.
//2. Loop over the array and remove any words or characters that obviously don't belong.
//3. Students must find and replace the > character in each item with a - character.
//4. Must add each string to the DOM in index.html in the main content area.



var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Into The Mystic by Van Morrison on the album Caravan");
songs.push("There is a Light That Never Goes out by The Smiths on the album The Queen Is Dead");
console.log(songs);


for (var i = 0; i < songs.length; i++) {
   songs[i] = songs[i].replace(/[^a-zA-Z0-9]/g, " ");

}

console.log(songs);