// previous letter clicked, starts null because there is no previous
let lastLetter = null;

// rotates element and previous element
function rotate(element) {

// rotates first element with no previous, only on very first click
  while (lastLetter == null) { // while there is no previous element
    element.classList.remove("default");
    element.classList.add("rotated");
    lastLetter = element; // assigns element to be changed on next click
  }

// allows clicking same element twice
  if (element == lastLetter) {

    if (lastLetter.className == "rotated") {
        lastLetter.classList.remove("rotated");
        lastLetter.classList.add("default");
    }
    else {
        lastLetter.classList.remove("default");
        lastLetter.classList.add("rotated");
    }
    lastLetter = element;
  }

// rotates element to flipped position
  if (element.className != "rotated") {

    element.classList.remove("default");
    element.classList.add("rotated")

    if (lastLetter.className == "rotated") {
        lastLetter.classList.remove("rotated");
        lastLetter.classList.add("default");
    }
    else {
        lastLetter.classList.remove("default");
        lastLetter.classList.add("rotated");
    }
    lastLetter = element;
  }

// rotates element back to original position
  else if (element.className == "rotated") {

      element.classList.remove("rotated");
      element.classList.add("default");

      if (lastLetter.className == "rotated") {
          lastLetter.classList.remove("rotated");
          lastLetter.classList.add("default");
      }
      else {
          lastLetter.classList.remove("default");
          lastLetter.classList.add("rotated");
      }
      lastLetter = element;
  }
}

// assigns clicked element to be rotated
window.onclick = element => {

  let selectedLetter = element.target; // assigns element clicked to variable

  if (selectedLetter.tagName == 'TD') {
    rotate(selectedLetter);
  }
}
