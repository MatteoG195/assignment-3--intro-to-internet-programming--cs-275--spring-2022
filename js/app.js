let prev;
let count = 0;

window.onclick = e => {
    let cur = e.target;
    console.log(count);

    if(cur.tagName != 'TD')
        alert("This element cannot be rotated.");
    else {/*first click*/
        if (count == 0)
            firstRot(cur);
        else /*every click after first*/
            rot(cur);
    }
}



function firstRot(e){
    e.classList.add("flipped");
    prev = e;
    count++;
}

function rot(e){
    if (e.className == "flipped") {
        e.classList.remove("flipped");
        checkPrev(prev);
        prev = e;
    }
    else {
        e.classList.add("flipped");
        checkPrev(prev);
        prev = e;
    }
}

function checkPrev(e){
    if(e.className == "flipped")
        e.classList.remove("flipped");
    else
        e.classList.add("flipped");
}
