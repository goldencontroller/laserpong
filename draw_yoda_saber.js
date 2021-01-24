function inityodasaber() {
	yoda_blade_pos = [90, 50];
}
function drawYodaSaber() {
	drawRect(document.getElementById("gamescreen"), "yodablade", 1 * factor, 20 * factor, yoda_blade_pos[0] * factor, yoda_blade_pos[1] * factor, "white");
	document.getElementById("yodablade").style.borderRadius = (500 * factor).toString() + "px";
}