function initLaser() {
	laserpos = [50,50];
	angle = 60;
	if (Math.floor(Math.random() * 2)) {
		angle = (Math.floor(Math.random() * 121) - 60);
	}
	else {
		angle = 180 - (Math.floor(Math.random() * 121) - 60);
	}
	speed = 0.3;
}
function drawLaserBeam() {
	
	laserpos[0] -= speed * Math.cos(angle * Math.PI / 180);
	laserpos[1] -= speed * Math.sin(angle * Math.PI / 180);
	
	drawEllipse(document.getElementById("gamescreen"), "laserbeam", 0.75 * factor, 0.75 * factor, laserpos[0] * factor, laserpos[1] * factor, "white");
	document.getElementById("laserbeam").style.transform = "rotate(" + angle.toString() + "deg)";
	
	if (rectCollision(document.getElementById("laserbeam"), document.getElementById("topbound")) || rectCollision(document.getElementById("laserbeam"), document.getElementById("bottombound"))) {
		angle = 360 - angle;
	}
	if (directionalCollision(document.getElementById("laserbeam"), document.getElementById("yodablade")) == "left" || directionalCollision(document.getElementById("laserbeam"), document.getElementById("vaderblade")) == "right") {
		angle = 180 - angle;
		sfx("lasrhit2.mp3")
	}
	if (directionalCollision(document.getElementById("laserbeam"), document.getElementById("yodablade")) == "top" || directionalCollision(document.getElementById("laserbeam"), document.getElementById("vaderblade")) == "top") {
		angle = 360 - angle;
	}
	if (directionalCollision(document.getElementById("laserbeam"), document.getElementById("yodablade")) == "bottom" || directionalCollision(document.getElementById("laserbeam"), document.getElementById("vaderblade")) == "bottom") {
		angle = 360 - angle;
	}
}