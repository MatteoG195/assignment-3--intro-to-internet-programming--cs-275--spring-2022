window.onload = () => {
    let letterA = document.querySelectorAll(`td`)[0];
    let letterB = document.querySelectorAll(`td`)[1];
    let letterC = document.querySelectorAll(`td`)[2];
    let letterD = document.querySelectorAll(`td`)[3];

    let rotatedA = false;
    let rotatedB = false;
    let rotatedC = false;
    let rotatedD = false;

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
};
