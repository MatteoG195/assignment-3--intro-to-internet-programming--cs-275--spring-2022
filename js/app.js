var elemA = document.getElementById("A");
var elemB = document.getElementById("B");
var elemC = document.getElementById("C");
var elemD = document.getElementById("D");


//for(var i = 0;i < elem.length;i++){
//elem[i].addEventListener("click", rotater);
elemA.addEventListener("click", rotate1);
elemB.addEventListener("click", rotate2);
elemC.addEventListener("click", rotate3);
elemD.addEventListener("click", rotate4);

function rotate1(){
    elemA.classList.add("rotated");
}

function rotate2(){
    elemA.classList.remove("rotated");
    elemB.classList.add("rotated");
}

function rotate3(){
    elemC.classList.add("rotated");
}

function rotate4(){
    elemD.classList.add("rotated");
}
