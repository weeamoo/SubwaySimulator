
//places subway car on screen using game coords
function UpdateSubPos (xPass, yPass) {

// translates game units to percent of screen
	xPass = xPass / 16;
	yPass = yPass / 9;

	document.getElementById("playerCarDiv").style.left = xPass + "%";
	document.getElementById("playerCarDiv").style.bottom = yPass + "%"
}