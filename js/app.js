let updateCells = (newCell) => {
    let curCell = document.querySelector(`.flipped`);
    if (newCell == curCell) {
        newCell.classList.add(`standard`);
        newCell.classList.remove(`flipped`);
    }
    else {
        if (curCell != null)
        {
            curCell.classList.add(`standard`);
            curCell.classList.remove(`flipped`);
        }
        newCell.classList.add(`flipped`);
        newCell.classList.remove(`standard`);
    }
};

window.onload = () => {
    let cells = document.getElementsByTagName(`td`);
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener(`click`, () => {
            updateCells(cells[i]);
        });
    }
};
