requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
    
  },
  shim: {

  	"bootstrap": ["jquery"]
}
});



require(["jquery", "hbs", "bootstrap", "script", "populate-songs", "populate-dropdown", "populate-album-dropdown", "populate-genre-dropdown", "addSong", "filter"], function(jquery, hbs, bootstrap, script, populateSongs, dropdown, albumDropdown, genreDropdown) {

	
  populateSongs.getMeSomeData(function(getData){

		// console.log("populateSongs", getData);

    });

  
  dropdown.getMeSomeData(function(getData) {
    
    
  });
  
 

   

  }
);