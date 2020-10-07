var paused = true;

/*runs toggle pause when escape is pressed */

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        togglePause();
    }
};

function togglePause () {

    if (onStartMenu == false) {
        if (paused) {
            unPauseGame();
        } else {
            pauseGame();
        }
    }
}

function pauseGame () {
    paused = true;

}

function unPauseGame () {
    paused = false;

}