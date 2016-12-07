function leftArrowPressed() {
   window.location.href = 'http://www.google.com';
}

function rightArrowPressed() {
    window.location.href = 'http://www.neti.ee';
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
