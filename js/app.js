window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);

    let allLetters = document.querySelectorAll(`td`);
    let A = allLetters[0];
    let B = allLetters[1];
    let C = allLetters[2];
    let D = allLetters[3];
    let pastLetter = null;
    let isRotated = new Boolean(false);

    A.addEventListener(`click`, () => {
        rotate(A);
        isRotated = true;
    });

    B.addEventListener(`click`, () => {
        rotate(B);
        isRotated = true;
    });

    C.addEventListener(`click`, () => {
        rotate(C);
        isRotated = true;
    });

    D.addEventListener(`click`, () => {
        rotate(D);
        isRotated = true;
    });

    function rotate(letter){
        unrotate(pastLetter);
    }

};
