//vars

var x = 0;
var y = 0;

//runs every frame
function everyFrame () {

	keyActions();

	frameMovement();

	frameSpeedEnv();

	//calls function after one frame has passed
	requestAnimationFrame(everyFrame);
}

function keyActions () {

	//for each directions sees if speed is far enough away from zero then calls accel function
	if (left) {
		if (Math.abs(speed) < kick) {
			speed = 0 - kick;
		}
		speed = accel(speed, playerAccelPower, -1);
	} else if (right < kick) {
		if (Math.abs(speed)) {
			speed = kick;
		}
		speed = accel(speed, playerAccelPower, 1);
	}

}

function frameMovement () {

}

function frameSpeedEnv () {

}

//inital call to function to start eveything up
requestAnimationFrame(everyFrame);