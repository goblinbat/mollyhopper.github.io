function flip(letter) {
    // document.getElementById(letter).toggleAttribute('flipped');
    $('#'+letter).toggleClass('flipped');
}

function burger() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
}