let cells = document.getElementsByTagName(`td`);
let a = cells[0]
let b = cells[1]
let c = cells[2]
let d = cells[3]

a.addEventListener(`click`,()=> {
    rotate(a);
});

b.addEventListener(`click`,()=> {
    rotate(b);
});

c.addEventListener(`click`,()=> {
    rotate(c);
});

d.addEventListener(`click`,()=> {
    rotate(d);
});

function rotate(e) {
}
