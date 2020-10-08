//vars
var up = false;
var down = false;
var left = false;
var right = false;


//sets var to true when key is pressed
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
        left = true;
      break;
    case 38:
        up = true;
      break;
    case 39:
        right = true;
      break;
    case 40:
        down = true;
      break;
    case 65:
        left = true;
      break;
    case 87:
        up = true;
      break;
    case 68:
        right = true;
      break;
    case 83:
        down = true;
      break;
//    outputs key code when uncommented
//    default:
//        alert(event.keyCode);
//      break;

    }
};

//sets var to false when key is released
document.onkeyup = function(event) {
  switch (event.keyCode) {
    case 37:
        left = false;
      break;
    case 38:
        up = false;
      break;
    case 39:
        right = false;
      break;
    case 40:
        down = false;
      break;
    case 65:
        left = false;
      break;
    case 87:
        up = false;
      break;
    case 68:
        right = false;
      break;
    case 83:
        down = false;
      break;
    }
};