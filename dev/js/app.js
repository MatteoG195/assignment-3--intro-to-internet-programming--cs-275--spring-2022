let list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',animate);
}

function animate(){
    if(!event.target.classList.contains(`animated`)){
        event.target.classList.add(`animated`);
    }else{
        event.target.classList.add(`animated2`);
    }
}
