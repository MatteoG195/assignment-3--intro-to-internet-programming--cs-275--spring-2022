window.onload = () => {

    var all = document.querySelectorAll(`td`);
    var A = all[0];
    var B = all[1];
    var C = all[2];
    var D = all[3];
    var past = `Null`;

    A.addEventListener(`click`, () => {
        rotate(A);
        past = A;
    });

    B.addEventListener(`click`, () => {
        rotate(B);
        past = B;
    });

    C.addEventListener(`click`, () => {
        rotate(C);
        past = C;
    });

    D.addEventListener(`click`, () => {
        rotate(D);
        past = D;
    });

    function rotate(letter){
        letter.classList.add(`rotate`);
        unrotate(past);
        letter.classList.remove(`undo`);
        past = letter;
    }

    function unrotate(letter){
        if(letter != `Null`){
            letter.classList.add(`undo`);
            letter.classList.remove(`rotate`);
        }
    }

};
