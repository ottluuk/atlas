function leftArrowPressed() {
    var a;
    a = document.getElementById('prevLink')
    window.location.href = a.href;
}

function rightArrowPressed() {
    window.location.href = document.getElementById('nextLink').href;
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
};
