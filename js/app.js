var elemA = document.getElementById(`A`);
var elemB = document.getElementById(`B`);
var elemC = document.getElementById(`C`);
var elemD = document.getElementById(`D`);


//for(var i = 0;i < elem.length;i++){
//elem[i].addEventListener("click", rotater);
elemA.addEventListener(`click`, rotate1);
elemB.addEventListener(`click`, rotate2);
elemC.addEventListener(`click`, rotate3);
elemD.addEventListener(`click`, rotate4);

function rotate1(){
    if(elemA.classList.contains(`rotated`)){
        elemA.classList.remove(`rotated`);
        elemA.classList.add(`rotateback`);
    }else if(elemB.classList.contains(`rotated`)){
        elemB.classList.remove(`rotated`);
        elemB.classList.add(`rotateback`);
        elemA.classList.add(`rotated`);
    }else if(elemC.classList.contains(`rotated`)){
        elemC.classList.remove(`rotated`);
        elemC.classList.add(`rotateback`);
        elemA.classList.add(`rotated`);
    }else if(elemD.classList.contains(`rotated`)){
        elemD.classList.remove(`rotated`);
        elemD.classList.add(`rotateback`);
        elemA.classList.add(`rotated`);
    }else{
        elemA.classList.add(`rotated`);
    }
}
function rotate2(){
    if(elemA.classList.contains(`rotated`)){
        elemA.classList.remove(`rotated`);
        elemA.classList.add(`rotateback`);
        elemB.classList.add(`rotated`);
    }else if(elemC.classList.contains(`rotated`)){
        elemC.classList.remove(`rotated`);
        elemC.classList.add(`rotateback`);
        elemB.classList.add(`rotated`);
    }else if(elemD.classList.contains(`rotated`)){
        elemD.classList.remove(`rotated`);
        elemD.classList.add(`rotateback`);
        elemB.classList.add(`rotated`);
    }else{
        elemB.classList.add(`rotated`);
    }
}

function rotate3(){
    if(elemA.classList.contains(`rotated`)){
        elemA.classList.remove(`rotated`);
        elemA.classList.add(`rotateback`);
        elemC.classList.add(`rotated`);
    }else if(elemB.classList.contains(`rotated`)){
        elemB.classList.remove(`rotated`);
        elemB.classList.add(`rotateback`);
        elemC.classList.add(`rotated`);
    }else if(elemD.classList.contains(`rotated`)){
        elemD.classList.remove(`rotated`);
        elemD.classList.add(`rotateback`);
        elemC.classList.add(`rotated`);
    }else{
        elemC.classList.add(`rotated`);
    }
}

function rotate4(){
    if(elemA.classList.contains(`rotated`)){
        elemA.classList.remove(`rotated`);
        elemA.classList.add(`rotateback`);
        elemD.classList.add(`rotated`);
    }else if(elemB.classList.contains(`rotated`)){
        elemB.classList.remove(`rotated`);
        elemB.classList.add(`rotateback`);
        elemD.classList.add(`rotated`);
    }else if(elemC.classList.contains(`rotated`)){
        elemC.classList.remove(`rotated`);
        elemC.classList.add(`rotateback`);
        elemD.classList.add(`rotated`);
    }else{
        elemD.classList.add(`rotated`);
    }
}
