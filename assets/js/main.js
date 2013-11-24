var slideShowContainer = $('#slideshow-container');
var picturePrefix = "./assets/img/";
var radius = 600;

var pictures = new Array(
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

function getFaceLength(pictureNum){
	return Math.round(radius * 2 * Math.sin(Math.PI / pictureNum));
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
	console.log(pictureNum);
	slideShowContainer.children().append('<div class="face-wrapper">' +
		'<div style="transform: rotateY(' + getRotationAngle(pictureCount, pictureNum) + 'deg) translateZ(' + radius + 'px); width: ' + getFaceLength(pictureCount) + 'px; height: ' + getFaceHeight(pictureCount) + 'px;" class="face" id="face-' + pictureNum + '">' +
		'<img src="' + picturePrefix + pictureUrl + '" style="width: ' + (getFaceLength(pictureCount) - 20) + 'px; height: ' + (getFaceHeight(pictureCount) - 20) + 'px;">' +
		'</div>' +
		'<div class="face-back" style="background-color: rgb(' +  Math.floor(Math.random() * (256 + 1)) + ', ' + Math.floor(Math.random() * (256 + 1)) + ', ' + Math.floor(Math.random() * (256 + 1)) + '); transform: rotateY(' + getRotationAngle(pictureCount, pictureNum) + 'deg) translateZ(' + (radius - 1.2)  + 'px); width: ' + (getFaceLength(pictureCount) - 18) + 'px; height: ' + (getFaceHeight(pictureCount) - 18) + 'px;" id="face-' + pictureNum + '-back"></div>' +
		'</div>'
	);
}

slideShowContainer.append('<div class="slideshow"></div>');

for(var i = 0; i < pictures.length; i++){
	addFaceElement(pictures[i], i+1, pictures.length);
}
//add global css
$('.slideshow').attr('style', ($('.slideshow').attr('style') == undefined ? "" : $('.slideshow').attr('style')) + ' width: ' + getFaceLength(pictures.length) + 'px; height: ' + getFaceHeight(getFaceLength(pictures.length)) + 'px;');




var i = 0;

function rotate(direction){
	setTimeout(function(){
		var transform = $(".slideshow").css('transform');
		$(".slideshow").css('transform', transform  + ' rotateY(' + (direction != 'left' ? '-1' : '1') + 'deg)');
		i++;
		if(i < getAbsoluteRotationAngle(pictures.length)){
			rotate(direction);
		}
		else{
			i = 0;
		}
	}, 10)
}

var autoslide = null;
//setInterval(rotate, 2000);

$('#right-control').click(function(){
	rotate('left');
});

$('#left-control').click(function(){
	rotate('right');
});

$(window).scroll(function(e){
	
});

$('#autoslide').change(function(){
	if(autoslide == null){
		autoslide = setInterval(function(){rotate('left')}, 2000);
	}
	else{
		clearInterval(autoslide);
		autoslide = null;
	}
});
