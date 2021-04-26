let rotated = false;
let list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',rotation);
}

function rotation(target){
    let goal = event.target;
    if(rotated == false){
        goal.style.transform = 'rotate(180deg)';
        rotated = true;
    }else{
        goal.style.transform = 'rotate(360deg)';
        rotated = false;
    }
}
