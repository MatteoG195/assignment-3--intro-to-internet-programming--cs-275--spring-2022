window.onload = () => {
    //Create reference to each letter in the table
    let letterA = document.querySelectorAll(`td`)[0];
    let letterB = document.querySelectorAll(`td`)[1];
    let letterC = document.querySelectorAll(`td`)[2];
    let letterD = document.querySelectorAll(`td`)[3];

    //Create boolean to track when each letter is flipped or not
    let rotatedA = false;
    let rotatedB = false;
    let rotatedC = false;
    let rotatedD = false;

    //Function to flip letter A and flip all other letters back
    let rotateA = () => {
        if(!rotatedA) {
            letterA.style.transition = `transform .5s`;
            letterA.style.transform = `rotate(180deg)`;
            rotatedA = true;
            letterB.style.transition = `transform .5s`;
            letterB.style.transform = `rotate(0deg)`;
            rotatedB = false;
            letterC.style.transition = `transform .5s`;
            letterC.style.transform = `rotate(0deg)`;
            rotatedC = false;
            letterD.style.transition = `transform .5s`;
            letterD.style.transform = `rotate(0deg)`;
            rotatedD = false;
        }
        else {
            letterA.style.transition = `transform .5s`;
            letterA.style.transform = `rotate(0deg)`;
            rotatedA = false;
        }
    };

    //Function to flip letter B and flip all other letters back
    let rotateB = () => {
        if(!rotatedB) {
            letterB.style.transition = `transform .5s`;
            letterB.style.transform = `rotate(180deg)`;
            rotatedB = true;
            letterA.style.transition = `transform .5s`;
            letterA.style.transform = `rotate(0deg)`;
            rotatedA = false;
            letterC.style.transition = `transform .5s`;
            letterC.style.transform = `rotate(0deg)`;
            rotatedC = false;
            letterD.style.transition = `transform .5s`;
            letterD.style.transform = `rotate(0deg)`;
            rotatedD = false;
        }
        else {
            letterB.style.transition = `transform .5s`;
            letterB.style.transform = `rotate(0deg)`;
            rotatedB = false;
        }
    };

    //Function to flip letter C and flip all other letters back
    let rotateC = () => {
        if(!rotatedC) {
            letterC.style.transition = `transform .5s`;
            letterC.style.transform = `rotate(180deg)`;
            rotatedC = true;
            letterA.style.transition = `transform .5s`;
            letterA.style.transform = `rotate(0deg)`;
            rotatedA = false;
            letterB.style.transition = `transform .5s`;
            letterB.style.transform = `rotate(0deg)`;
            rotatedB = false;
            letterD.style.transition = `transform .5s`;
            letterD.style.transform = `rotate(0deg)`;
            rotatedD = false;
        }
        else {
            letterC.style.transition = `transform .5s`;
            letterC.style.transform = `rotate(0deg)`;
            rotatedC = false;
        }
    };

    //Function to flip letter D and flip all other letters back
    let rotateD = () => {
        if(!rotatedD) {
            letterD.style.transition = `transform .5s`;
            letterD.style.transform = `rotate(180deg)`;
            rotatedD = true;
            letterA.style.transition = `transform .5s`;
            letterA.style.transform = `rotate(0deg)`;
            rotatedA = false;
            letterB.style.transition = `transform .5s`;
            letterB.style.transform = `rotate(0deg)`;
            rotatedB = false;
            letterC.style.transition = `transform .5s`;
            letterC.style.transform = `rotate(0deg)`;
            rotatedC = false;
        }
        else {
            letterD.style.transition = `transform .5s`;
            letterD.style.transform = `rotate(0deg)`;
            rotatedD = false;
        }
    };

    /*Create event listeners for each letter in the table with
    the associated function*/
    letterA.addEventListener(`click`, rotateA);
    letterB.addEventListener(`click`, rotateB);
    letterC.addEventListener(`click`, rotateC);
    letterD.addEventListener(`click`, rotateD);
};
