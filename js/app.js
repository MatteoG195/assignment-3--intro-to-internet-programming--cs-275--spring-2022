window.onload=()=>{

    var A = document.querySelectorAll('td')[0];
    var B = document.querySelectorAll('td')[1];
    var C = document.querySelectorAll('td')[2];
    var D = document.querySelectorAll('td')[3];

    function rotate(letter){
            letter.classList.toggle('flip');
    }

    A.addEventListener('click',()=>{
        rotate(A);
        if (B.classList.contains('flip')){
            rotate(B);
        }
        if (C.classList.contains('flip')){
            rotate(C);
        }
        if (D.classList.contains('flip')){
            rotate(D);
        }
    });
    B.addEventListener('click',()=>{
        rotate(B);
        if (A.classList.contains('flip')){
            rotate(A);
        }
        if (C.classList.contains('flip')){
            rotate(C);
        }
        if (D.classList.contains('flip')){
            rotate(D);
        }
    });
    C.addEventListener('click',()=>{
        rotate(C);
        if (A.classList.contains('flip')){
            rotate(A);
        }
        if (B.classList.contains('flip')){
            rotate(B);
        }
        if (D.classList.contains('flip')){
            rotate(D);
        }
    });
    D.addEventListener('click',()=>{
        rotate(D);
        if (A.classList.contains('flip')){
            rotate(A);
        }
        if (B.classList.contains('flip')){
            rotate(B);
        }
        if (C.classList.contains('flip')){
            rotate(C);
        }
    });
}