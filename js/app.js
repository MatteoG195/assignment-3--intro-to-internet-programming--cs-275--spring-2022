window.onload = () => {
    // assign letters to table columns
    let letterA = document.querySelectorAll(`td`)[0];
    let letterB = document.querySelectorAll(`td`)[1];
    let letterC = document.querySelectorAll(`td`)[2];
    let letterD = document.querySelectorAll(`td`)[3];

    let isFlippedA = isFlippedB = isFlippedC = isFlippedD = false;

    // rotate letter A
    let flipA = () => {
        if(!isFlippedA) {
            reset();
            letterA.style.transition = `transform .5s`;
            letterA.style.transform = `rotate(180deg)`;
            isFlippedA = true;
        }
        else {
            reset();
        }
    };

    // rotate letter B
    let flipB = () => {
        if(!isFlippedB) {
            reset();
            letterB.style.transition = `transform .5s`;
            letterB.style.transform = `rotate(180deg)`;
            isFlippedB = true;
        }
        else {
            reset();
        }
    };

    // rotate letter C
    let flipC = () => {
        if(!isFlippedC) {
            reset();
            letterC.style.transition = `transform .5s`;
            letterC.style.transform = `rotate(180deg)`;
            isFlippedC = true;
        }
        else {
            reset();
        }
    };


    // rotate letter D
    let flipD = () => {
        if(!isFlippedD) {
            reset();
            letterD.style.transition = `transform .5s`;
            letterD.style.transform = `rotate(180deg)`;
            isFlippedD = true;
        }
        else {
            reset();
        }
    };

    // rotate all letters to original state
    function reset() {
        letterA.style.transition = letterB.style.transition = letterC.style.transition = letterD.style.transition = `transform .5s`;
        letterA.style.transform = letterB.style.transform = letterC.style.transform = letterD.style.transform = `rotate(0deg)`;

        isFlippedA = isFlippedB = isFlippedC = isFlippedD = false;
    }

    // call corresponding function when letter is clicked
    letterA.addEventListener(`click`, flipA);
    letterB.addEventListener(`click`, flipB);
    letterC.addEventListener(`click`, flipC);
    letterD.addEventListener(`click`, flipD);

};
