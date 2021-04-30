windows.onload = () => {

  let tagTD = document.querySelectorAll("td");
  tagTD[0].addEventListener(`click`, flip);     //Event listener when clicked calls the flip function
  tagTD[1].addEventListener(`click`, flip);
  tagTD[2].addEventListener(`click`, flip);
  tagTD[3].addEventListener(`click`, flip);

};