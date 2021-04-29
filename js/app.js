var el_up = document.getElementById('flip');
var clickedA = false;
var clickedB = false;
var clickedC = false;
var clickedD = false;

function flipA() {
    if (clickedA) {
        document.getElementById('flippedA').id = 'flipA'
        clickedA = false;
    } else {
        document.getElementById('flipA').id = 'flippedA'
        clickedA = true;
    }
}

function flipB() {
    if (clickedB) {
        document.getElementById('flippedB').id = 'flipB'
        clickedB = false;
    } else {
        document.getElementById('flipB').id = 'flippedB'
        clickedB = true;
    }
}

function flipC() {
    if (clickedC) {
        document.getElementById('flippedC').id = 'flipC'
        clickedC = false;
    } else {
        document.getElementById('flipC').id = 'flippedC'
        clickedC = true;
    }
}

function flipD() {
    if (clickedD) {
        document.getElementById('flippedD').id = 'flipD'
        clickedD = false;
    } else {
        document.getElementById('flipD').id = 'flippedD'
        clickedD = true;
    }
}