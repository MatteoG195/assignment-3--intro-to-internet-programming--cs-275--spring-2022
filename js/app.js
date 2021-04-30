var x = document.getElementsByTagName(`td`);

let A = x[0];
let B = x[1];
let C = x[2];
let D = x[3];

function rotate(letter) {
    letter.classList.toggle(`rotate`);
}

A.addEventListener(`click`, ()=>{
    rotate(A);
    if (B.classList.contains(`rotate`))
        rotate(B);
    if (C.classList.contains(`rotate`))
        rotate(C);
    if (D.classList.contains(`rotate`))
        rotate(D);
});

B.addEventListener(`click`, ()=>{
    rotate(B);
    if (A.classList.contains(`rotate`))
        rotate(A);
    if (C.classList.contains(`rotate`))
        rotate(C);
    if (D.classList.contains(`rotate`))
        rotate(D);
});

C.addEventListener(`click`, ()=>{
    rotate(C);
    if (A.classList.contains(`rotate`))
        rotate(A);
    if (B.classList.contains(`rotate`))
        rotate(B);
    if (D.classList.contains(`rotate`))
        rotate(D);
});

D.addEventListener(`click`, ()=>{
    rotate(D);
    if (A.classList.contains(`rotate`))
        rotate(A);
    if (B.classList.contains(`rotate`))
        rotate(B);
    if (C.classList.contains(`rotate`))
        rotate(C);
});
