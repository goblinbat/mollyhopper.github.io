function flip(letter) {
    // document.getElementById(letter).toggleAttribute('flipped');
    $('#'+letter).toggleClass('flipped');
}