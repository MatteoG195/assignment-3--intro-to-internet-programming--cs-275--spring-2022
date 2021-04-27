window.onload = () => {

    let all = document.querySelectorAll(`td`);
    let A = all[0];
    let B = all[1];
    let C = all[2];
    let D = all[3];
    let past = null;

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
        if(letter.classList.contains(`normal`)){
            letter.classList.remove(`normal`);
        }
        if(past != null && past.classList.contains(`rotate`)){
            unrotate(past);
        }
        letter.classList.add(`rotate`);
        past = letter;
    }

    function unrotate(letter){
        letter.classList.remove(`rotate`);
        letter.classList.add(`normal`);
    }

};
