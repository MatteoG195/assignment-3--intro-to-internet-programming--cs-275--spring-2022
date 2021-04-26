var list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',rotation);
}

function rotation(){
    var test = document.getElementsByTagName(`td`);
    test[0].style.transform = 'rotate(180deg)';

}
