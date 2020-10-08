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

}

function frameMovement () {

}

function frameSpeedEnv () {

}

//inital call to function to start eveything up
requestAnimationFrame(everyFrame);