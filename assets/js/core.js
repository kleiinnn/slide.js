var slideShowContainer;
var i = 0;

exports.init = function(){
	slideShowContainer = $('#' + config.slideShowContainerId);
}

exports.generateSlideshow = function(){
	slideShowContainer.append('<div class="slideshow"></div>');
	for(var i = 0; i < config.faces.length; i++){
		addFaceElement(config.faces[i].picture, i+1, config.faces.length);
	}
	$('.slideshow').attr('style', ($('.slideshow').attr('style') == undefined ? "" : $('.slideshow').attr('style')) + ' width: ' + getFaceLength(config.faces.length) + 'px; height: ' + getFaceHeight(getFaceLength(config.faces.length)) + 'px;');
	
}

var tmpArray = new Array(
	"unsplash_5248748fb40ac_1.JPG",
	"unsplash_5255bf45a4a45_1.JPG",
	"unsplash_5249ec183ab2c_1.JPG",
	"unsplash_5263607dd1bfc_1.JPG",
	"unsplash_5252b10dacd20_1.JPG",
	"unsplash_527bf5fd7f5f6_1.JPG",
	"unsplash_5269924c8ce7c_1.JPG",
	"unsplash_5252bb51404f8_1.JPG",
	"unsplash_525a7e89953d1_1.JPG",
	"unsplash_52509afaba7b1_1.JPG",
	"unsplash_5263605581e32_1.JPG",
	"unsplash_5261cd0183e57_1.JPG"
);



exports.rotate = function(direction){
	setTimeout(function(){
		var transform = $(".slideshow").css('-webkit-transform');
		$(".slideshow").css('-webkit-transform', transform  + ' rotateY(' + (direction != 'left' ? '-1' : '1') + 'deg)');
		i++;
		if(i < getAbsoluteRotationAngle(config.faces.length)){
			exports.rotate(direction);
		}
		else{
			i = 0;
		}
	}, 10);
}

function getFaceLength(pictureNum){
	return Math.round(config.radius * 2 * Math.sin(Math.PI / pictureNum));
}

function getAbsoluteRotationAngle(pictureCount){
	return Math.round(360 / pictureCount);
}

function getRotationAngle(pictureCount, pictureNum){
	var angle = Math.round(360 / pictureCount) * pictureNum;
	if(angle > 180){
		angle -= 360;
	}
	return angle;
}

function getFaceHeight(length){
	return Math.round((10 / 16) * getFaceLength(length));
}

function addFaceElement(pictureUrl, pictureNum, pictureCount){
	var appendString = '<div class="album">';
	for(int i = 0; i < tmpArray.length; i++){
		
	}
	slideShowContainer.children().append(
		'<div class="face-wrapper">' +
		'<div style="-webkit-transform: rotateY(' + getRotationAngle(pictureCount, pictureNum) + 'deg) translateZ(' + config.radius + 'px); width: ' + getFaceLength(pictureCount) + 'px; height: ' + getFaceHeight(pictureCount) + 'px;" class="face" id="face-' + pictureNum + '">' +
		'<img src="' + config.picturePrefix + pictureUrl + '" style="width: ' + (getFaceLength(pictureCount) - 20) + 'px; height: ' + (getFaceHeight(pictureCount) - 20) + 'px;">' +
		'<button class="audio-control" id="audio-control-' + pictureNum + '">Start</button>' +
		'</div>' +
		'<div class="face-back" style="background-color: rgb(' +  Math.floor(Math.random() * (256 + 1)) + ', ' + Math.floor(Math.random() * (256 + 1)) + ', ' + Math.floor(Math.random() * (256 + 1)) + '); -webkit-transform: rotateY(' + getRotationAngle(pictureCount, pictureNum) + 'deg) translateZ(' + (config.radius - 1.2)  + 'px); width: ' + (getFaceLength(pictureCount) - 18) + 'px; height: ' + (getFaceHeight(pictureCount) - 18) + 'px;" id="face-' + pictureNum + '-back"></div>' +
		'</div>'
	);
}

function addVerticalFaceElement(pictureUrl, pictureNum, pictureCount, container){
	container.append(
		'<div class="face-wrapper">' +
		'<div style="-webkit-transform: rotateX(' + getRotationAngle(pictureCount, pictureNum) + 'deg) translateZ(' + config.radius + 'px); width: ' + getFaceLength(pictureCount) + 'px; height: ' + getFaceHeight(pictureCount) + 'px;" class="face" id="face-' + pictureNum + '">' +
		'<img src="' + config.picturePrefix + pictureUrl + '" style="width: ' + (getFaceLength(pictureCount) - 20) + 'px; height: ' + (getFaceHeight(pictureCount) - 20) + 'px;">' +
		'<button class="audio-control" id="audio-control-' + pictureNum + '">Start</button>' +
		'</div>' +
		'<div class="face-back" style="background-color: rgb(' +  Math.floor(Math.random() * (256 + 1)) + ', ' + Math.floor(Math.random() * (256 + 1)) + ', ' + Math.floor(Math.random() * (256 + 1)) + '); -webkit-transform: rotateX(' + getRotationAngle(pictureCount, pictureNum) + 'deg) translateZ(' + (config.radius - 1.2)  + 'px); width: ' + (getFaceLength(pictureCount) - 18) + 'px; height: ' + (getFaceHeight(pictureCount) - 18) + 'px;" id="face-' + pictureNum + '-back"></div>' +
		'</div>'
	);
}




