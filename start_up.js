map = {};
drawImgSprite(document.getElementById("gamescreen"), "logoimage", 100 * factor, 100 * factor, 50 * factor, 50 * factor, "logoimage.jpg");
count = 0;
function intro() {
	onkeydown = onkeyup = function(e){
		e = e || event;
		map[e.keyCode] = e.type == 'keydown';
	}
	
	drawImgSprite(document.getElementById("gamescreen"), "logoimage", 100 * factor, 100 * factor, 50 * factor, 50 * factor, "logoimage.jpg");
	
	if ( count < 2020 ) {
		count++;
		setTimeout(intro, 1);
	}
	else {
		mainmenu();
		document.getElementById("logoimage").remove();
	}
	
}
function actuallyStartTheGame() {
	document.getElementById("startscreen").remove();
	var mainscript = document.createElement("script");
	mainscript.src = "main.js";
	document.body.appendChild(mainscript);
}
what = 0;
function mainmenu() {
	onkeydown = onkeyup = function(e){
		e = e || event;
		map[e.keyCode] = e.type == 'keydown';
	}
	if (what == 0) {
		playmusic("saberhum.mp3");
		what = 1;
		drawImgSprite(document.getElementById("gamescreen"), "startscreen", 100 * factor, 100 * factor, 50 * factor, 50 * factor, "startscreen.gif");
	}
	if (map[13]) {
		document.getElementById("startscreen").style.animation = "fadeout 1s";
		setTimeout(actuallyStartTheGame, 999);
	}
	else {
		setTimeout(mainmenu, 1);
	}
}
intro();