window.onload=()=>{

    var A = document.querySelectorAll('td')[0];
    var B = document.querySelectorAll('td')[1];
    var C = document.querySelectorAll('td')[2];
    var D = document.querySelectorAll('td')[3];
    var temp = 'Null';

    function rotate(letter){
            letter.classList.add('flip');
    }

    A.addEventListener('click',()=>{
        rotate(A);
        temp = A;
    });
    B.addEventListener('click',()=>{
        rotate(B);
        temp = B;
    });
    C.addEventListener('click',()=>{
        rotate(C);
        temp = C;
    });
    D.addEventListener('click',()=>{
        rotate(D);
        temp = D;
    });
}