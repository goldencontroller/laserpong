function displayScoreboard(score1, score2) {
	drawRect(document.getElementById("gamescreen"), "scoreboard", 100 * factor, 10 * factor, 50 * factor, 20 * factor, "");
	document.getElementById("scoreboard").innerText = score1.toString() + " - " + score2.toString();
}

function clearScoreboard() {
	document.getElementById("scoreboard").remove();
}