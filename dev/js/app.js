window.onload = () => {

  let tagTD = document.querySelectorAll("td");
  tagTD[0].addEventListener(`click`, flip);     //Event listener when clicked calls the flip function
  tagTD[1].addEventListener(`click`, flip);
  tagTD[2].addEventListener(`click`, flip);
  tagTD[3].addEventListener(`click`, flip);

  function flip(ev) {                           //Rotates the targeted letter when clicked on
    if (ev.target.className != "rotate")
      ev.target.classList.add("rotate");        //adds class name "rotate" in css to current
    else
      ev.target.classList.remove("rotate")      //removes class name "rotate" in css from current
    for(i = 0; i < tagTD.length; i++)           //iterates through the NodeList
      if(tagTD[i] != ev.target)
        tagTD[i].classList.remove("rotate");
  }
};