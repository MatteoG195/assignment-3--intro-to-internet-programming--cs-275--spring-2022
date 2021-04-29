window.onload = () => {

    // Initializing Variables
    let all = document.querySelectorAll(`td`);
    let A = all[0];
    let B = all[1];
    let C = all[2];
    let D = all[3];
    let past = null;

    // Adding Event Listeners to Each Table Cell and Call Rotate on CLick
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

    /* Rotate Function to be check if previous needs to be unrotated
       and then rotate the current click */
    function rotate(letter){

        // remove normal if it is in class list of current letter
        if(letter.classList.contains(`normal`)){
            letter.classList.remove(`normal`);
        }

        // check if there is a previous letter and if it contains rotate class
        if(past != null && past.classList.contains(`rotate`)){
            unrotate(past);
        }

        // add rotate animation to class list
        letter.classList.add(`rotate`);

        // reassign past to the current letter
        past = letter;
    }

    // Unrotate Function to remove rotate and call normal animation
    function unrotate(letter){

        // remove the rotate class from the letter
        letter.classList.remove(`rotate`);

        // add the normal animation to class list
        letter.classList.add(`normal`);
    }

};
