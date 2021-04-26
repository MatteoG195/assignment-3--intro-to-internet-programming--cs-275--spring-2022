var rotated = false;
var list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',rotation);
}

function rotation(event){
    var target = event.target;
    console.log(target);
    if(rotated == false){
        target.style.transform = 'rotate(180deg)';
        rotated = true;
    }else{
        target.style.transform = 'rotate(360deg)';
        rotated = false;
    };
}
