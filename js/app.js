window.onload = () => {

    var all = document.querySelectorAll(`td`);
    var A = all[0];
    var B = all[1];
    var C = all[2];
    var D = all[3];
    var past = `Null`;

    A.addEventListener(`click`, () => {
        rotate(A);
    });

    B.addEventListener(`click`, () => {
        rotate(B);
    });

    C.addEventListener(`click`, () => {
        rotate(C);
    });

    D.addEventListener(`click`, () => {
        rotate(D);
    });

    function rotate(letter){
        letter.classList.remove(`undo`);
        unrotate(past);
        letter.classList.add(`rotate`);
        past = letter;
    }

    function unrotate(letter){
        if(letter != `Null`){
            letter.classList.remove(`rotate`);
            letter.classList.add(`undo`);
        }
    }

};
