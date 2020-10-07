//vars

//no vars yet

//runs every frame
function everyFrame () {

	//calls function after one frame has passed
	requestAnimationFrame(everyFrame);
}

//inital call to function to start eveything up
requestAnimationFrame(everyFrame);