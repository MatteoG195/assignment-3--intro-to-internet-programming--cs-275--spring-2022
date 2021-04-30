window.onload = () => {
        /*this boolean is to track if the variable has been flipped in the table or not*/
        let isFlippedA = false;

        let isFlippedB = false;

        let isFlippedC = false;

        let isFlippedD = false;
    /*this is for A to be flipped and if D is flipped then it will unflip*/
    let flipA = () =>
    {
        if (isFlippedA==false){
            A.classList.add("rotate");
              isflippedA=true;
        }
        if (isflippedB==true){
            B.classList.remove("rotate");
              isflippedB=false;
        }
        if (isflippedC==true){
            C.classList.remove("rotate");
              sflippedC=false;
        }
        if (isflippedD==true){
            D.classList.remove("rotate");
               isflippedD=false;
        }
    }
    /*this is for B to be flipped and A to be unflipped*/
    let flipB = () =>
    {
      if (isFlippedB==false){
          B.classList.add("rotate");
            isflippedB=true;
        }
        if (isflippedC==true){
            C.classList.remove("rotate");
                isflippedC=false;
        }
        if (isflippedD==true){
            D.classList.remove("rotate");
                isflippedD=false;
        }
        if (isflippedA==true){
            A.classList.remove("rotate");
              isflippedA==false;
        }
    }
    /*this is for C to be flipped and B to be unflipped*/
    let flipC = () =>
    {
        if (isFlippedC==false){
            C.classList.add("rotate");
              isflippedC=true;
          }
          if (isflippedD==true){
               D.classList.remove("rotate");
                  isflippedD=false;
          }
          if (isflippedA==true){
               A.classList.remove("rotate");
               isflippedA==false;
           }
          if (isflippedB==true){
              B.classList.remove("rotate");
                isflippedB=false;
           }
      }
      /*this is for D to be flipped and for C to be unflipped or if anyother
      letter is flipped it will be unflipped */
      let flipD = () =>
      {
          if (isFlippedD==false){
              D.classList.add("rotate");
                isflippedD=true;
           }
           if (isflippedC==true){
               C.classList.remove("rotate");
                 isflippedC=false;
            }
           if (isflippedA==true){
               A.classList.remove("rotate");
                  isflippedA==false;
           }
           if (isflippedB==true){
               B.classList.remove("rotate");
                  isflippedB=false;
            }
        }
        /* I created event listeners for each variable i also added the click
        function for the user to click and rotate the variables*/
        /*the querySelectorAll is a refernce to the variables in the table*/
        let A = document.querySelectorAll(`td`)[0];
            A.addEventListener(`click`, flipA);

        let B = document.querySelectorAll(`td`)[1];
            B.addEventListener(`click`, flipB);

        let C = document.querySelectorAll(`td`)[2];
            C.addEventListener(`click`, flipC);

        let D = document.querySelectorAll(`td`)[3];
            D.addEventListener(`click`, flipD);
}
