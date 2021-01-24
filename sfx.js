function sfx(source) {
	var audio = new Audio(source);
	audio.play();
}

function playmusic(source) {
	document.body.innerHTML += "<audio loop id='music' controls style='display: none;' autoplay='autoplay'><source src='" + source + "'></audio>";
	//document.getElementById("music").play();
}

function stopmusic() {
	document.getElementById("music").remove();
}