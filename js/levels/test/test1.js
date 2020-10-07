/* this function is essentially the geometry sliced by the if or switch statement */

function getNearestRail (x, y) {

	var outY;
	
	switch (x) {

		/*x coord starts at zero */

    		case x < 900:
        		
    			outY = 500;

        		break;
    		case x < 1100:
        		
    			outY = x + 500;

        		break;
    		case x < 1300:
        		
    			outY = 700

        		break;
    		default:
        		alert("none");
        		break;
	}


	/* outputs y coord of nearest rail */
	return outY
}

