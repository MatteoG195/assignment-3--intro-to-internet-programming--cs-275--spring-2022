var rotated = false;
var list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',rotation);
}

function rotation(){
    var test = document.getElementsByTagName(`td`);
    if(rotated == false){
        test[0].style.transform = 'rotate(180deg)';
        rotated = true;
    }else{
        test[0].style.transform = 'rotate(360deg)';
        rotated = false;
    };
}
