function initvadersaber() {
	vader_blade_pos = [10, 50];
}
function drawVaderSaber() {
	drawRect(document.getElementById("gamescreen"), "vaderblade", 1 * factor, 20 * factor, vader_blade_pos[0] * factor, vader_blade_pos[1] * factor, "white");
	document.getElementById("vaderblade").style.borderRadius =  (500 * factor).toString() + "px";
}