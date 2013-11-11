var slideShowContainer = $('#slideshow-container');
 var picturePrefix = "./assets/img/";

 var pictures = new Array(
 "unsplash_5248748fb40ac_1.JPG",
 "unsplash_5255bf45a4a45_1.JPG",
 "unsplash_5249ec183ab2c_1.JPG",
 "unsplash_5263607dd1bfc_1.JPG",
 "unsplash_5252b10dacd20_1.JPG",
 "unsplash_527bf5fd7f5f6_1.JPG"
 );

 function addFaceElement(pictureUrl, indexNum, pictureWidth){
 slideShowContainer.children().append('<div class="face-wrapper">' +
 '<div class="face" id="face-' + indexNum + '">' +
 '<img src="' + pictureUrl + '">' +
 '</div>' +
 '<div id="face-' + indexNum + '-back"></div>' +
 '</div>'
 );

 $('#face-' + indexNum).css('transform', 'rotateY(' + indexNum *  + ')')


 }

 slideShowContainer.append('<div class="slideshow"></div>');
 for(var i = 0; i < pictures.length; i++){

 }

var i = 0;

function rotate(){
	setTimeout(function(){
		var transform = $(".polygone").css('transform');
		$(".polygone").css('transform', transform  + ' rotateY(-1deg)');
		i++;
		if(i < 60){
			rotate();
		}
		else{
			i = 0;
		}
	}, 10)
}

setInterval(rotate, 2000);
