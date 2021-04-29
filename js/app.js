var elem = document.getElementById("A");

//for(var i = 0;i < elem.length;i++){
//elem[i].addEventListener("click", rotater);


function rotater(){
    elem.style.transition = "all 3s";
    elem.style.transform = "rotate(180deg)";

}
//for(var i = 0;i < elem.length;i++){
//elem[i].addEventListener("click", rotater);
//}

elem.addEventListener("click", rotater);
