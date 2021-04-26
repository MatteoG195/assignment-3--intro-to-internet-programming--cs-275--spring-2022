let rotated = false;
let list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',rotation);
}

function rotation(event){
    let target = event.target;
    if(rotated == false){
        target.style.transform = 'rotate(180deg)';
        rotated = true;
    }else{
        target.style.transform = 'rotate(360deg)';
        rotated = false;
    }
}
