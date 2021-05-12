window.onload = () => {

    // Initializing Variables
    let all = document.querySelectorAll(`td`);
    let A = all[0];
    let B = all[1];
    let C = all[2];
    let D = all[3];

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

    // Function to call past(), unrotate(), and then rotate the current letter
    function rotate(letter){

        // call past to find which letter is currently rotated
        let prev = past();

        // call unrotate on the result from past call
        unrotate(prev);

        // checking if the currently rotated letter is the one clicked on
        if (prev == letter){
            // only unrotate needs to happen
        }

        // checking if the current letter contains the normal class
        else if (letter.classList.contains(`normal`)){
            // removes the normal class
            letter.classList.remove(`normal`);
            letter.classList.add(`rotate`);
        }
        // rotates the current letter if nothing needs to be removed
        else{
            letter.classList.add(`rotate`);
        }

    }

    // Function to find which letter is currently rotated, returns null if none
    function past(){

        // if statements to find which letter is currently rotated if any
        let letter = null;
        if (A.classList.contains(`rotate`)){
            letter = A;
        }
        else if (B.classList.contains(`rotate`)){
            letter = B;
        }
        else if (C.classList.contains(`rotate`)){
            letter = C;
        }
        else if (D.classList.contains(`rotate`)){
            letter = D;
        }
        else{
            letter = null;
        }
        // returns the result
        return letter;
    }

    // Function to remove rotate and call normal animation
    function unrotate(letter){

        // unrotate if one is rotated
        if (letter != null){

            // remove the rotate class from the letter
            letter.classList.remove(`rotate`);

            // add the normal animation to class list
            letter.classList.add(`normal`);
        }
    }

};
