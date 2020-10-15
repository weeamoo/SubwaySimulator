//vars

var x = 0;
var y = 0;

//runs every frame
function everyFrame () {

	//don't run the game if it's paused
	if (paused == false) {

		keyActions();

		frameMovement();

		frameSpeedEnv();
	}

	//calls function after one frame has passed
	requestAnimationFrame(everyFrame);
}

function keyActions () {

	//for each directions sees if speed is far enough away from zero then calls accel function
	if (left) {
		if (Math.abs(xSpeed) < kick) {
			xSpeed = 0 - kick;
		}
		xSpeed = accel(xSpeed, playerAccelPower, -1);
	} else if (right) {
		if (Math.abs(xSpeed) < kick) {
			xSpeed = kick;
		}
		xSpeed = accel(xSpeed, playerAccelPower, 1);
	}

}

function frameMovement () {

	//sets y to where the rail is
	y = getNearestRail(x, y);

	//applies one frame of movement
	x = x + xSpeed;

	//calcs new camera pos
	updateCameraOffset();

	//moves sub to position & moves camera if freecam is off
	if (freeCam) {
		updateSubPos(x, y);
	} else {
		updateSubPos(x + xOffset, y + yOffset);
		updateBackPos(xOffset, yOffset);
	}

}

function frameSpeedEnv () {

}

//inital call to function to start eveything up
requestAnimationFrame(everyFrame);