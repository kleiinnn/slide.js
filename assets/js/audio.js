var context;

exports.init = function(){
	try{
		context = new AudioContext();
	}
	catch(e){
		alert("WebAudioAPI is not availible in you browser! Please use a browser which supports WebAudioAPI.");
	}
}

exports.play = function(slideshowElement){
	
}
