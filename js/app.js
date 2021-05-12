let prev;
let count = 0;

window.onclick = e => {
    let cur = e.target;

    if(cur.tagName != 'TD')
        alert("This element cannot be rotated.");
    else {

        //calls the proper function for every click after the first
        if (count != 0)
            rot(cur);

        //calls the proper function for the first click
        else
            firstRot(cur);
    }
}


//function for first node clicked
function firstRot(e){
    e.classList.add("flipped");
    prev = e;
    count++;
}

//function for rotating clicked node and previous node
function rot(e){
    if(e.compareDocumentPosition(prev) == 0)
        check(e);
    else
        if (e.className == "flipped") {
            e.classList.remove("flipped");
            check(prev);
            prev = e;
        }
        else {
            e.classList.add("flipped");
            check(prev);
            prev = e;
        }
}

//checks and updates a node's rotation without assigning a previously clicked node
function check(e){
    if(e.className == "flipped")
        e.classList.remove("flipped");
    else
        e.classList.add("flipped");
}
