//feed current speed, accel direction, & accel power in and will return new speed
function accel (speedPass, directionPass, accelPowerPass) {

	//directionPass can be
	// -1	reverse
	// 0	neutral
	// 1	forward

	//accelPass is percent of current speed that will be added

	//speedPass should be the current speed that is needing adjusted

	//will return new speed

	return speedPass + (speedPass * accelPowerPass * directionPass);

}