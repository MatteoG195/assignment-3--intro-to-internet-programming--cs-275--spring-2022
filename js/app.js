let degrees = 0;
let prev;

let rota = function(td) {
    degrees+=180;
    td.style.transform = 'rotate(' + degrees + 'deg)';
}

window.onclick = e => {
    let cur = e.target;
    if(cur.tagName != 'TD')
        alert("This element cannot be rotated.");
    else
        rota(cur);
}

/*window.onclick = e => {
    degrees += 180;
    let cur = e.target;
    temp = cur;
    console.log(cur);
    cur.style.transform = 'rotate(' + degrees + 'deg)';
}*/
