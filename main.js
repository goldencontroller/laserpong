map = {};

var yoda_blade_pos = [90, 50];
var vader_blade_pos = [10, 50];
var laserpos = [50, 50];
var angle = 60;
var speed = 0.3;

initLaser();
inityodasaber();
initvadersaber();

p1score = 0;
p2score = 0;
waittime = 2000;

document.getElementById("gamescreen").style.backgroundImage = "url('bgscreen.jpg')";
document.getElementById("gamescreen").style.backgroundSize = "100% 100%";

function main() {
	onkeydown = onkeyup = function(e){
		e = e || event;
		map[e.keyCode] = e.type == 'keydown';
	}
	
	if (map[38]) {
		if (yoda_blade_pos[1] > 13) {
			yoda_blade_pos[1] -= 0.5;
		}
	}
	if (map[40]) {
		if (yoda_blade_pos[1] < 87) {
			yoda_blade_pos[1] += 0.5;
		}
	}
	
	if (map[87]) {
		if (vader_blade_pos[1] > 13) {
			vader_blade_pos[1] -= 0.5;
		}
	}
	if (map[83]) {
		if (vader_blade_pos[1] < 87) {
			vader_blade_pos[1] += 0.5;
		}
	}
	
	drawYodaSaber();
	drawVaderSaber();
	drawLaserBeam();
	
	if (rectCollision(document.getElementById("laserbeam"), document.getElementById("leftbound"))) {
		p2score++;
		displayScoreboard(p1score, p2score);
		setTimeout(initLaser, waittime);
		setTimeout(inityodasaber, waittime);
		setTimeout(initvadersaber, waittime);
		setTimeout(main, waittime);
		setTimeout(clearScoreboard, waittime);
	}
	else if (rectCollision(document.getElementById("laserbeam"), document.getElementById("rightbound"))) {
		p1score++;
		displayScoreboard(p1score, p2score);
		setTimeout(initLaser, waittime);
		setTimeout(inityodasaber, waittime);
		setTimeout(initvadersaber, waittime);
		setTimeout(main, waittime);
		setTimeout(clearScoreboard, waittime);
	}
	else { setTimeout(main, 1); }
}
main();