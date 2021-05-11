window.onload = () => {
    let A = document.querySelectorAll(`td`) [0];
    let B = document.querySelectorAll(`td`) [1];
    let C = document.querySelectorAll(`td`) [2];
    let D = document.querySelectorAll(`td`) [3];

    let isRotatedA = false;
    let isRotatedB = false;
    let isRotatedC = false;
    let isRotatedD = false;

    let rotateA = () => {
        if(isRotatedA == false) {
            A.classList.add(`rotate`);
            isRotatedA = true;
        }
        if(isRotatedB == true) {
            B.classList.remove(`rotate`);
            isRotatedB = false;
        }
        if(isRotatedC == true) {
            C.classList.remove(`rotate`);
            isRotatedC = false;
        }
        if(isRotatedD == true) {
            D.classList.remove(`rotate`);
            isRotatedD = false;
        }
    };

    let rotateB = () => {
        if(isRotatedB == false) {
            B.classList.add(`rotate`);
            isRotatedB = true;
        }
        if(isRotatedA == true) {
            A.classList.remove(`rotate`);
            isRotatedA = false;
        }
        if(isRotatedC == true) {
            C.classList.remove(`rotate`);
            isRotatedC = false;
        }
        if(isRotatedD == true) {
            D.classList.remove(`rotate`);
            isRotatedD = false;
        }
    };

    let rotateC = () => {
        if(isRotatedC == false) {
            C.classList.add(`rotate`);
            isRotatedC = true;
        }
        if(isRotatedA == true) {
            A.classList.remove(`rotate`);
            isRotatedA = false;
        }
        if(isRotatedB == true) {
            B.classList.remove(`rotate`);
            isRotatedB = false;
        }
        if(isRotatedD == true) {
            D.classList.remove(`rotate`);
            isRotatedD = false;
        }
    };

    let rotateD = () => {
        if(isRotatedD == false) {
            D.classList.add(`rotate`);
            isRotatedD = true;
        }
        if(isRotatedA == true) {
            A.classList.remove(`rotate`);
            isRotatedA = false;
        }
        if(isRotatedB == true) {
            B.classList.remove(`rotate`);
            isRotatedB = false;
        }
        if(isRotatedC == true) {
            C.classList.remove(`rotate`);
            isRotatedC = false;
        }
    };
};
