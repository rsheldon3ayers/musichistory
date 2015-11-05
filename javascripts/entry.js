requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});

require(["jquery", "script", "populate-songs", "more-songs"], function(jquery, second, third, fourth) {

	third.getMeSomeData(function(getData){

		console.log("getData", getData);
	});
	fourth.getMeSomeData(function(getData) {

		console.log("more-songs", getData);
	});
  }
);