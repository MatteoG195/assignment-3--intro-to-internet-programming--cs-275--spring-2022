window.onload = () => {
      let A = document.querySelectorAll(`td`)[0];
      let B = document.querySelectorAll(`td`)[1];
      let C = document.querySelectorAll(`td`)[2];
      let D = document.querySelectorAll(`td`)[3];

      let isFlippedA=false;
      let isFlippedB=false;
      let isFlippedC=false;
      let isFlippedD=false;

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
               isflippedC=false;
          }
          if (isflippedD==true){
               D.classList.remove("rotate");
               isflippedD=false;
          }

      }

      let flipB = () =>
      {
          if (isFlippedB==false){
              B.classList.add("rotate");

              isflippedB=true;
          }
          if (isflippedA==true){
              A.classList.remove("rotate");
              isflippedA==false;
          }
          if (isflippedC==true){
               C.classList.remove("rotate");
               isflippedC=false;
          }
          if (isflippedD==true){
              D.classList.remove("rotate");
              isflippedD=false;

          }
      }

      let flipC = () =>
      {
          if (isFlippedC==false){
              C.classList.add("rotate");

              isflippedC=true;
          }
          if (isflippedB==true){
              B.classList.remove("rotate");
               isflippedB=false;

          }
          if (isflippedA==true){
               A.classList.remove("rotate");
               isflippedA==false;
          }
          if (isflippedD==true){
              D.classList.remove("rotate");
              isflippedD=false;

          }
      }

      let flipD = () =>
      {
          if (isFlippedD==false){
              D.classList.add("rotate");

              isflippedD=true;
          }
          if (isflippedB==true){
              B.classList.remove("rotate");
               isflippedB=false;

          }
          if (isflippedC==true){
               C.classList.remove("rotate");
                isflippedC=false;
          }
          if (isflippedA==true){
               A.classList.remove("rotate");
              isflippedA==false;
          }
      }
      A.addEventListener(`click`, flipA);
      B.addEventListener(`click`, flipB);
      C.addEventListener(`click`, flipC);
      D.addEventListener(`click`, flipD);
}
