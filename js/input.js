document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
        alert('Left key pressed');
      break;
    case 38:
        alert('Up key pressed');
      break;
    case 39:
        alert('Right key pressed');
      break;
    case 40:
        alert('Down key pressed');
      break;
    case 65:
        alert('A key pressed');
      break;
    case 87:
        alert('W key pressed');
      break;
    case 68:
        alert('D key pressed');
      break;
    case 83:
        alert('S key pressed');
      break;
    default:
        alert(event.keyCode);
      break;

    }
};