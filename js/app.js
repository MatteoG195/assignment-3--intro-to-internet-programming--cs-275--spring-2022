let list = occurent.getElementsByTagName('td');
for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', animate);
}

function animate(){
    for(let i = 0; i<list.length; i++){
        if(list[i] != event.target && list[i]classList.contains('animated')) {
            list[i].classList.add('animated2');
        }
    }
    if(!event.target.classList.contains('animated')) {
        event.target.classList.add('animated');
    } else {
        event.target.classList.add('animated2');
    }
    window.setTimeout(clear_window, 10);
}

function clear_window(){
    for(let i = 0; i<list.length; i++){
        if(list[i].classList.contains(`animated2`)){
            list[i].classList.remove(`animated`);
            list[i].classList.remove(`animated2`);
        }
    }
}
