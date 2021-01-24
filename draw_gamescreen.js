var windowwidth;
var windowheight;
var factor;
function resize() {
	windowwidth = window.innerWidth;
	windowheight = window.innerHeight;
	if (windowwidth >= windowheight) {
		factor = windowheight / 100;
	} else {
		factor = windowwidth / 100;
	}
}
resize();
function drawgamescreen() {
	drawRect(document.body, "gamescreen", 100 * factor, 100 * factor, 0.5 * windowwidth, 0.5 * windowheight, "");
	drawRect(document.getElementById("gamescreen"), "topbound", 100 * factor, 0, 50 * factor, 0 * factor, "red");
	drawRect(document.getElementById("gamescreen"), "bottombound", 100 * factor, 0, 50 * factor, 100 * factor, "red");
	drawRect(document.getElementById("gamescreen"), "leftbound", 0, 100 * factor, 0 * factor, 50 * factor, "red");
	drawRect(document.getElementById("gamescreen"), "rightbound", 0, 100 * factor, 100 * factor, 50 * factor, "red");
}
drawgamescreen();