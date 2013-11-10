

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {{
		if ((new Date().getTime() - start) > milliseconds)
			break;
		}
	}
}

var i = 0;

function rotate(){
	setTimeout(function(){
		var transform = $(".polygone").css('transform')
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
