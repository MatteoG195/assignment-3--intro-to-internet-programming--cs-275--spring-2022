let rotated = false;
let list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',animate);
}

function animate(){
    if(rotated==false){
        event.target.classList.add(`animated`);
        rotated = true;
    }else{
        event.target.classList.add(`animated2`);
        rotated = false;
    }
}
