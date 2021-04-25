window.onload = () => {
    var A = document.querySelectorAll(`td`)[0];
    var B = document.querySelectorAll(`td`)[1];
    var C = document.querySelectorAll(`td`)[2];
    var D = document.querySelectorAll(`td`)[3];
    A.addEventListener(`click`, () => {
        A.classList.add(`rotate`);
    });
    B.addEventListener(`click`, () => {
        B.classList.add(`rotate`);
    });
    C.addEventListener(`click`, () => {
        C.classList.add(`rotate`);
    });
    D.addEventListener(`click`, () => {
        D.classList.add(`rotate`);
    });
};
